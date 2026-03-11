const TIMELINE_EVENTS = [
  {
    year: '1989',
    title: 'Nacimiento',
    description:
      'Gojo Satoru nace, alterando el equilibrio del mundo al ser el primer portador de los Seis Ojos y el Infinito en más de 400 años.',
  },
  {
    year: '2006',
    title: 'Estudiante en el Instituto Jujutsu',
    description:
      'Junto a Geto Suguru y Shoko Ieiri, forma parte de la generación más talentosa del Instituto de Tokio. Gojo y Geto son conocidos como "los más fuertes".',
  },
  {
    year: '2007',
    title: 'Misión de la Estrella',
    description:
      'La misión de escoltar a Amanai Riko termina en tragedia. Gojo es derrotado por Toji Fushiguro pero revive despertando el verdadero poder de los Seis Ojos.',
  },
  {
    year: '2008',
    title: 'La caída de Geto',
    description:
      'Geto Suguru deserta del lado de los hechiceros tras masacrar una aldea. Gojo pierde a su mejor amigo, un evento que lo marca profundamente.',
  },
  {
    year: '2017',
    title: 'Profesor del Instituto',
    description:
      'Gojo se convierte en profesor de primer año, enseñando a la nueva generación. Su meta: cambiar el sistema corrupto de hechicería desde adentro.',
  },
  {
    year: '2018',
    title: 'Incidente de Shibuya',
    description:
      'Gojo es sellado dentro de la Prisión del Reino por la conspiración de Kenjaku (poseyendo el cuerpo de Geto). El mundo pierde a su hechicero más fuerte.',
  },
]

export function TimelineSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-10">
        Línea de Tiempo
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        <div className="flex flex-col gap-10">
          {TIMELINE_EVENTS.map((event, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 md:gap-0`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

                <div
                  className={`pl-10 md:pl-0 md:w-1/2 ${
                    isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'
                  }`}
                >
                  <span className="inline-block text-xs font-mono text-primary font-semibold mb-1">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-foreground text-sm mb-1">{event.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
