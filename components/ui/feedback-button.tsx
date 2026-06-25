"use client"

import { MessageSquare } from "lucide-react"

export function FeedbackButton() {
  return (
    <a
      href="/feedback"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-3 rounded-full shadow-lg shadow-cyan-500/20 font-semibold transition-transform hover:scale-105"
    >
      <MessageSquare className="h-5 w-5" />
      Provide Feedback
    </a>
  )
}
