export function BioFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Gojo Satoru</p>
          <p className="text-xs text-muted-foreground">
            {'Personaje de Jujutsu Kaisen por Gege Akutami'}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          {'Fan page no oficial. Todos los derechos pertenecen a sus respectivos autores.'}
        </p>
      </div>
    </footer>
  )
}
