'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { ChatHeader } from './chat-header'
import { ChatMessage, TypingIndicator } from './chat-message'
import { ChatInput } from './chat-input'
import { WelcomeScreen } from './welcome-screen'

export function GojoChatbot() {
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
    <div className="flex flex-col h-dvh max-w-2xl mx-auto bg-background">
      <ChatHeader />

      <main className="flex-1 overflow-y-auto scrollbar-thin">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={handleSuggestion} />
        ) : (
          <div className="py-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isWaiting && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <ChatInput
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  )
}
