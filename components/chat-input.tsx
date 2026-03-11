'use client'

import { Send } from 'lucide-react'

interface ChatInputProps {
  input: string
  setInput: (val: string) => void
  onSubmit: () => void
  isLoading: boolean
}

export function ChatInput({ input, setInput, onSubmit, isLoading }: ChatInputProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className="flex items-end gap-2 p-3 bg-card border-t border-border"
    >
      <div className="relative flex-1">
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            e.target.style.height = 'auto'
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              onSubmit()
            }
          }}
          placeholder="Preguntale algo a Gojo..."
          disabled={isLoading}
          rows={1}
          className="w-full resize-none rounded-xl bg-secondary text-secondary-foreground placeholder:text-muted-foreground px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 transition-all"
          style={{ maxHeight: '120px' }}
        />
      </div>
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
        aria-label="Enviar mensaje"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
