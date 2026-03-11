'use client'

import Image from 'next/image'

interface GojoMascotProps {
  isThinking?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function GojoMascot({ isThinking = false, size = 'md', className = '' }: GojoMascotProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size]} relative rounded-full overflow-hidden border-2 border-primary ${
          isThinking ? 'animate-pulse-glow' : ''
        } ${!isThinking ? 'animate-float' : ''}`}
      >
        <Image
          src="/images/gojo-chibi.jpg"
          alt="Gojo Satoru mascot"
          fill
          className="object-cover"
          priority
        />
      </div>
      {isThinking && (
        <div className="absolute -bottom-1 -right-1 flex gap-0.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.2s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.4s' }}
          />
        </div>
      )}
    </div>
  )
}
