const RELATIONSHIPS = [
  {
    name: 'Itadori Yuji',
    role: 'Estudiante',
    description: 'El recipiente de Sukuna. Gojo lo acepta como estudiante y apuesta por su potencial, viéndolo como parte del cambio que desea para el mundo jujutsu.',
  },
  {
    name: 'Fushiguro Megumi',
    role: 'Estudiante',
    description: 'Heredero de la técnica de las Diez Sombras del clan Zen\'in. Gojo lo rescató de pequeño del clan Zen\'in y ha velado por él desde entonces.',
  },
  {
    name: 'Kugisaki Nobara',
    role: 'Estudiante',
    description: 'Hechicera de primer año con la técnica de Resonancia. Gojo aprecia su espíritu fuerte e inquebrantable.',
  },
  {
    name: 'Geto Suguru',
    role: 'Mejor amigo / Enemigo',
    description: 'El único a quien Gojo consideró su igual. Su deserción es la herida más profunda de Gojo, y su pérdida moldea toda su visión del mundo.',
  },
  {
    name: 'Ryomen Sukuna',
    role: 'Antagonista principal',
    description: 'El Rey de las Maldiciones. El único ser cuyo poder rivaliza con el de Gojo, representando la amenaza suprema para el mundo de la hechicería.',
  },
  {
    name: 'Nanami Kento',
    role: 'Colega',
    description: 'Ex-estudiante que dejó la hechicería para trabajar en oficina pero regresó. Gojo respeta su pragmatismo aunque sus personalidades chocan constantemente.',
  },
]

export function RelationshipsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
        Relaciones
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl">
        {'A pesar de su actitud despreocupada, Gojo mantiene lazos profundos con quienes lo rodean. Sus relaciones definen tanto su motivación como su tragedia.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RELATIONSHIPS.map((rel) => (
          <div
            key={rel.name}
            className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm text-foreground">{rel.name}</h3>
              <span className="text-[10px] uppercase tracking-wider text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10">
                {rel.role}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{rel.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
