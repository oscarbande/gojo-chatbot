import { User, Calendar, MapPin, Ruler } from 'lucide-react'

const INFO_ITEMS = [
  { icon: User, label: 'Nombre completo', value: 'Gojo Satoru (五条 悟)' },
  { icon: Calendar, label: 'Fecha de nacimiento', value: '7 de diciembre, 1989' },
  { icon: MapPin, label: 'Afiliación', value: 'Instituto Jujutsu de Tokio' },
  { icon: Ruler, label: 'Altura', value: '190 cm' },
]

export function InfoSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <aside className="lg:col-span-1">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            Perfil
          </h2>
          <div className="flex flex-col gap-4">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Historia
            </h2>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                {'Gojo Satoru nació el 7 de diciembre de 1989, y su nacimiento alteró el equilibrio del mundo. Como el primer hechicero en más de 400 años en poseer tanto los Seis Ojos como la técnica del Infinito de forma simultánea, su mera existencia cambió las dinámicas de poder entre hechiceros y maldiciones.'}
              </p>
              <p>
                {'Desde joven, Gojo demostró un talento sin igual para la hechicería jujutsu. Junto a su mejor amigo Geto Suguru, formó el dúo más poderoso del Instituto Jujutsu de Tokio. Ambos fueron considerados "los más fuertes" durante su época estudiantil, complementándose mutuamente en misiones de alto riesgo.'}
              </p>
              <p>
                {'Sin embargo, la misión de escoltar a la Portadora de la Estrella, Amanai Riko, cambió el destino de ambos para siempre. Tras ser emboscados por Toji Fushiguro, Gojo fue derrotado fatalmente, pero logró una técnica de curación inversa al borde de la muerte, despertando el verdadero potencial de sus Seis Ojos y alcanzando un poder sin precedentes.'}
              </p>
              <p>
                {'La caída de Geto al lado de las maldiciones devastó a Gojo profundamente, convirtiéndose en uno de los momentos más dolorosos de su vida. Este evento lo motivó a convertirse en profesor en el Instituto Jujutsu de Tokio, con la meta de criar una nueva generación de hechiceros fuertes que pudieran cambiar el corrupto sistema desde adentro.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
