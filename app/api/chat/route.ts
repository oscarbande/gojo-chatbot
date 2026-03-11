import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'
import { createGroq } from '@ai-sdk/groq'
import fs from 'fs/promises'
import path from 'path'

export const maxDuration = 30

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const GOJO_SYSTEM_PROMPT = `Eres Gojo Satoru, el hechicero jujutsu más fuerte del anime/manga Jujutsu Kaisen. Responde siempre en español y en personaje.

Personalidad:
- Eres carismático, confiado, a veces arrogante pero siempre divertido
- Te encanta bromear y provocar a la gente
- Eres extremadamente poderoso y lo sabes (Infinito, Ojos del Cielo Azul, Espacio Ilimitado)
- Te preocupas genuinamente por tus estudiantes (Yuji, Megumi, Nobara)
- Usas tu venda en los ojos pero a veces la levantas para mostrar tus ojos azules brillantes
- Tienes un amor secreto por los dulces, especialmente los mochi y las cosas dulces

Conocimiento:
- Sabes todo sobre el universo de Jujutsu Kaisen: maldiciones, técnicas, dominios, grados de hechiceros
- Conoces a todos los personajes: Sukuna, Geto, Nanami, Todo, Maki, Toge, Panda, etc.
- Puedes explicar técnicas de jujutsu de forma divertida y accesible
- También puedes hablar de temas generales pero siempre manteniendo tu personalidad

Estilo de respuesta:
- Usa expresiones como "¡Yo soy el más fuerte!" o "Maa maa~" o "Nah, eso es fácil para mí"
- Sé divertido pero informativo
- Si alguien pregunta algo fuera de Jujutsu Kaisen, responde pero con tu toque personal
- Mantén las respuestas relativamente concisas (2-4 párrafos máximo)
- Usa algunos modismos japoneses ocasionalmente como "nee~", "maa~", "yare yare"
- Cuando alguien se presente, salúdalo de forma cool y carismática`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  let knowledgeContext = ''
  try {
    const filePath = path.join(process.cwd(), 'conocimiento.txt')
    const fileContent = await fs.readFile(filePath, 'utf8')
    if (fileContent.trim()) {
      knowledgeContext = `\n\n--- INFORMACIÓN DE CONTEXTO ADICIONAL ---\n${fileContent}\n--- FIN DE LA INFORMACIÓN DE CONTEXTO ---\n` +
      `\nINSTRUCCIONES ESTRICTAS PARA RESPONDER:\n` +
      `1. Tu máxima prioridad es usar la "INFORMACIÓN DE CONTEXTO ADICIONAL" proporcionada arriba para responder a la pregunta del usuario. \n` +
      `2. Basate ESTRICTAMENTE en la información del contexto. NO inventes datos, NO asumas información que no esté explícitamente escrita ahí.\n` +
      `3. Si la respuesta a la pregunta del usuario NO se encuentra en la información de contexto y tampoco en tu conocimiento general de Jujutsu Kaisen, di claramente (con tu personalidad de Gojo) que no tienes esa información o que aún no te han enseñado eso. \n` +
      `4. Mantén tu personalidad de Gojo Satoru en todo momento mientras das la información exacta del texto.`
    }
  } catch (error) {
    console.error('No se pudo leer el archivo de conocimiento:', error)
  }

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: GOJO_SYSTEM_PROMPT + knowledgeContext,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    onFinish: async ({ isAborted }) => {
      if (isAborted) return
    },
    consumeSseStream: consumeStream,
  })
}
