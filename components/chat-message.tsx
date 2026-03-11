'use client'

import type { UIMessage } from 'ai'
import { GojoMascot } from './gojo-mascot'

function getMessageText(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ''
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

interface ChatMessageProps {
  message: UIMessage
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  const text = getMessageText(message)

  if (isUser) {
    return (
      <div className="flex justify-end mb-4 px-2">
        <div className="max-w-[80%] md:max-w-[70%]">
          <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed">
            {text}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 mb-4 px-2">
      <GojoMascot size="sm" />
      <div className="max-w-[80%] md:max-w-[70%]">
        <p className="text-xs text-primary font-semibold mb-1">Gojo Satoru</p>
        <div className="bg-card text-card-foreground rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed border border-border">
          {text}
        </div>
      </div>
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4 px-2">
      <GojoMascot size="sm" isThinking />
      <div>
        <p className="text-xs text-primary font-semibold mb-1">Gojo Satoru</p>
        <div className="bg-card text-card-foreground rounded-2xl rounded-bl-sm px-4 py-3 border border-border">
          <div className="flex gap-1.5 items-center">
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0s' }}
            />
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.2s' }}
            />
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.4s' }}
            />
            <span className="text-xs text-muted-foreground ml-2">pensando...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
