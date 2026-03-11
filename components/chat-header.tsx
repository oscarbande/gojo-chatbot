'use client'

import { GojoMascot } from './gojo-mascot'
import { Sparkles } from 'lucide-react'

export function ChatHeader() {
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
      <GojoMascot size="sm" />
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-foreground text-sm flex items-center gap-1.5">
          Gojo Satoru
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </h1>
        <p className="text-xs text-muted-foreground truncate">
          El hechicero más fuerte
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs text-muted-foreground">En línea</span>
      </div>
    </header>
  )
}
