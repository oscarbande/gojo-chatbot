import Image from 'next/image'
import { Zap, Shield, Eye, Target } from 'lucide-react'

const ABILITIES = [
  {
    icon: Shield,
    name: 'Infinito (無下限)',
    description:
      'La técnica heredada del clan Gojo. Manipula el espacio a nivel atómico, creando una barrera invisible que ralentiza infinitamente cualquier objeto que se acerque, haciéndolo prácticamente intocable.',
  },
  {
    icon: Zap,
    name: 'Azul (蒼)',
    description:
      'Amplifica la convergencia del Infinito, generando un vacío que atrae todo hacia un punto con fuerza devastadora. Es la forma ofensiva básica de su técnica.',
  },
  {
    icon: Target,
    name: 'Rojo (赫)',
    description:
      'La inversión del Azul. En lugar de atraer, repele todo con una fuerza explosiva duplicada. Resultado de aplicar energía maldita inversa al Infinito.',
  },
  {
    icon: Eye,
    name: 'Púrpura Hueco (虚式「茈」)',
    description:
      'La técnica suprema que combina Azul y Rojo. Crea una esfera de destrucción que borra todo lo que toca de la existencia, manipulando la realidad misma.',
  },
]

export function AbilitiesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/5 flex-shrink-0">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Poderes y Habilidades
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {'Gojo es el único hechicero en poseer tanto los Seis Ojos (六眼) como la técnica del Infinito, una combinación que no se veía en más de cuatro siglos. Esto le otorga una percepción sobrehumana y un control total sobre el espacio.'}
          </p>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border">
            <Image
              src="/images/gojo-abilities.jpg"
              alt="Gojo usando Púrpura Hueco"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-primary font-semibold">Expansión de Dominio</p>
              <p className="text-foreground font-bold text-sm">Espacio Ilimitado (無量空処)</p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 flex flex-col gap-4">
          {ABILITIES.map((ability, index) => (
            <div
              key={ability.name}
              className="group flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ability.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground font-mono">
                    {'0' + (index + 1)}
                  </span>
                  <h3 className="font-semibold text-sm text-foreground">{ability.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
