import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <Image
        src="/images/gojo-hero.jpg"
        alt="Gojo Satoru - El hechicero más fuerte"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
            Grado Especial
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
            Profesor
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-3 text-balance tracking-tight">
          Gojo Satoru
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
          {'El hechicero jujutsu más fuerte de la era moderna. Poseedor de los Seis Ojos y la técnica innata del Infinito.'}
        </p>
      </div>
    </section>
  )
}
