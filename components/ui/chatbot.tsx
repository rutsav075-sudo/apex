"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Bot, Sparkles, Terminal } from "lucide-react"

const APEX_KNOWLEDGE = [
  {
    intent: "what_is_apex",
    patterns: [/\bwhat is apex\b/i, /\babout apex\b/i, /\bexplain\b/i, /\bwho are you\b/i],
    response: "Apex Browser is a next-generation, privacy-focused web browser built for performance. It features a built-in Game Mode, an AI Copilot, and an advanced ad-blocker with over 80,000 tracker signatures."
  },
  {
    intent: "performance",
    patterns: [/\bgame\b/i, /\bgaming\b/i, /\bram\b/i, /\bmemory\b/i, /\bperformance\b/i, /\bspeed\b/i, /\bfast\b/i, /\blag\b/i],
    response: "Apex Browser is designed to never eat up your RAM! Our unique Game Mode automatically suspends inactive tabs and redirects CPU/RAM resources to your game while you're playing. It's built on a highly optimized Chromium core."
  },
  {
    intent: "ad_blocker",
    patterns: [/\bad\b/i, /\bads\b/i, /\bblock\b/i, /\bpopup\b/i, /\btracker\b/i, /\byoutube ads\b/i],
    response: "Our built-in ad blocker operates locally with over 80,000 tracker and ad network signatures. It blocks YouTube ads and popups instantly at the network level without sending your data to any servers."
  },
  {
    intent: "ai_copilot",
    patterns: [/\bai\b/i, /\bcopilot\b/i, /\bchatgpt\b/i, /\bmodel\b/i, /\bsidebar\b/i, /\bollama\b/i],
    response: "The Apex AI Copilot is built directly into the sidebar. You can use multiple AI models (like OpenAI, Anthropic, or local offline models via Ollama) to summarize pages, write code, or research without opening 10 different tabs."
  },
  {
    intent: "privacy",
    patterns: [/\bprivacy\b/i, /\bdata\b/i, /\btrack\b/i, /\bhistory\b/i, /\bsafe\b/i, /\bsecure\b/i, /\btelemetry\b/i],
    response: "Privacy is our foundation. We have a zero-telemetry philosophy: we do not track your browsing history, keystrokes, or IP address. All your local data (bookmarks, passwords) is encrypted with AES-256."
  },
  {
    intent: "download",
    patterns: [/\bdownload\b/i, /\binstall\b/i, /\bget\b/i, /\bwindows\b/i, /\bmac\b/i, /\blinux\b/i],
    response: "You can download Apex Browser directly from our homepage! It is fully optimized for Windows, macOS, and Linux."
  },
  {
    intent: "pricing",
    patterns: [/\bcost\b/i, /\bprice\b/i, /\bfree\b/i, /\bpay\b/i, /\bsubscription\b/i],
    response: "Apex Browser is completely free to download and use! We believe premium performance and privacy should be accessible to everyone."
  },
  {
    intent: "greetings",
    patterns: [/\bhello\b/i, /\bhi\b/i, /\bhey\b/i, /\bgreetings\b/i, /\bsup\b/i],
    response: "Hello there! I'm the Apex Nexus AI. You can ask me anything about the Apex Browser's features, privacy, or performance!"
  }
]

const SUGGESTED_QUESTIONS = [
  "What is Apex Browser?",
  "How does Game Mode save RAM?",
  "Does it block YouTube ads?",
  "Tell me about the AI Copilot."
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I am Nexus, the Apex AI Assistant. How can I assist you today?" }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const processQuery = (query: string) => {
    setMessages(prev => [...prev, { role: 'user', text: query }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      let foundResponse = null

      for (const knowledge of APEX_KNOWLEDGE) {
        if (knowledge.patterns.some(pattern => pattern.test(query))) {
          foundResponse = knowledge.response
          break
        }
      }

      if (!foundResponse) {
        foundResponse = "I'm sorry, my current offline model doesn't have the answer to that specific question. Please reach out to our team at apex.org.91@gmail.com for assistance!"
      }

      setMessages(prev => [...prev, { role: 'bot', text: foundResponse }])
      setIsTyping(false)
    }, 1000 + Math.random() * 800) // Realistic typing delay
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    processQuery(input.trim())
  }

  return (
    <>
      {/* Tooltip Message */}
      {!isOpen && (
        <div className="fixed bottom-[104px] right-[96px] z-50 animate-bounce">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-4 py-2 rounded-2xl rounded-br-sm shadow-lg border border-white/20 whitespace-nowrap">
            I am here to assist you!
          </div>
        </div>
      )}

      {/* Modern Glowing Orb Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-[88px] right-6 z-50 flex items-center justify-center h-16 w-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 group ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
        <div className="absolute inset-[2px] bg-black rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-md group-hover:blur-lg transition-all" />
        <Bot className="h-7 w-7 text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        <Sparkles className="h-3 w-3 text-cyan-300 absolute top-3 right-3 z-10 animate-pulse" />
      </button>

      {/* Advanced Glassmorphism Chat Window */}
      <div 
        className={`fixed bottom-[88px] right-6 z-50 w-[380px] h-[600px] max-h-[85vh] bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto translate-y-0' : 'scale-90 opacity-0 pointer-events-none translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-t-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-black" />
            </div>
            <div>
              <h3 className="font-bold text-white text-md tracking-wide">Nexus AI</h3>
              <p className="text-xs text-cyan-400 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                System Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-lg ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-sm' 
                    : 'bg-white/10 border border-white/5 text-gray-200 rounded-bl-sm backdrop-blur-md'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 border border-white/5 rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1.5 items-center w-fit">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions / Suggestions */}
        {messages.length === 1 && !isTyping && (
          <div className="px-5 pb-2 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((sq, i) => (
              <button
                key={i}
                onClick={() => processQuery(sq)}
                className="text-[11px] bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 px-3 py-1.5 rounded-full transition-colors text-left"
              >
                {sq}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-black/40 rounded-b-2xl">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-500"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="h-11 w-11 bg-gradient-to-tr from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-50 disabled:grayscale rounded-full flex items-center justify-center transition-all shrink-0 shadow-lg shadow-purple-500/20"
            >
              <Send className="h-4 w-4 text-white ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
