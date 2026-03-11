'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Historia', href: '#historia' },
  { label: 'Poderes', href: '#poderes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Relaciones', href: '#relaciones' },
  { label: 'Frases', href: '#frases' },
]

export function BioNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-background/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-bold text-sm text-foreground">Gojo Satoru</span>
        </a>
        <div className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
