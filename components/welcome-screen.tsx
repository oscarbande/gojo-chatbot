'use client'

import { GojoMascot } from './gojo-mascot'

const SUGGESTIONS = [
  '¿Quién eres tú, Gojo?',
  '¿Cuál es tu técnica más poderosa?',
  'Cuéntame sobre tus estudiantes',
  '¿Qué opinas de Sukuna?',
]

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
      <GojoMascot size="lg" className="mb-6" />

      <div className="text-center mb-8 max-w-sm">
        <h2 className="text-xl font-bold text-foreground mb-2 text-balance">
          {'Yoo~ ¡Soy Gojo Satoru!'}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {'El hechicero más fuerte. Pregúntame lo que quieras sobre Jujutsu Kaisen... o sobre lo increíble que soy~ ✨'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left px-4 py-3 rounded-xl border border-border bg-card text-card-foreground text-sm hover:border-primary/50 hover:bg-primary/5 transition-all active:scale-[0.98]"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
