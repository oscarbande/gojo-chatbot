const QUOTES = [
  {
    text: 'A lo largo de los cielos y la tierra, solo yo soy el honrado.',
    context: 'Su frase icónica, reflejo de su absoluta confianza.',
  },
  {
    text: 'Quiero que mis alumnos tengan una muerte apropiada para un hechicero jujutsu... no que mueran sin ser reconocidos.',
    context: 'Revelando su verdadera motivación como profesor.',
  },
  {
    text: '¿Quieres saber la razón por la que te perdí? Es porque eres mi mejor amigo. Mi único amigo.',
    context: 'A Geto Suguru, en su último encuentro.',
  },
]

export function QuotesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-10">
        Frases Memorables
      </h2>

      <div className="flex flex-col gap-8">
        {QUOTES.map((quote) => (
          <blockquote
            key={quote.text}
            className="relative pl-6 border-l-2 border-primary/40"
          >
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed text-pretty italic">
              {'"' + quote.text + '"'}
            </p>
            <cite className="block mt-2 text-xs text-muted-foreground not-italic">
              {'-- ' + quote.context}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
