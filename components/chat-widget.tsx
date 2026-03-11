'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageCircle, X, Minimize2 } from 'lucide-react'
import { GojoMascot } from './gojo-mascot'
import { ChatMessage, TypingIndicator } from './chat-message'
import { ChatInput } from './chat-input'

const SUGGESTIONS = [
  '¿Quién eres?',
  '¿Cuál es tu técnica?',
  'Cuéntame de Sukuna',
  'Háblame de Shibuya',
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'
  const isWaiting = status === 'submitted'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleSuggestion = (text: string) => {
    sendMessage({ text })
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 ${
          isOpen
            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            : 'bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow'
        }`}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con Gojo'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100dvh-8rem)] flex flex-col bg-background border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-md border-b border-border">
            <GojoMascot size="sm" />
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-foreground text-sm">Gojo Satoru</h2>
              <p className="text-xs text-muted-foreground">Preguntame lo que quieras~</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors"
              aria-label="Minimizar chat"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full px-4 py-6">
                <GojoMascot size="lg" className="mb-4" />
                <p className="text-sm text-foreground font-semibold text-center mb-1">
                  {'Yoo~ ¡Hablemos!'}
                </p>
                <p className="text-xs text-muted-foreground text-center mb-5">
                  {'Preguntame sobre Jujutsu Kaisen'}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestion(s)}
                      className="px-3 py-1.5 rounded-full text-xs border border-border bg-card text-card-foreground hover:border-primary/50 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-3">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isWaiting && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          <ChatInput
            input={input}
            setInput={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  )
}
