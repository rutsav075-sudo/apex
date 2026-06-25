"use client"

import { useEffect, useRef } from "react"

export function WelcomeVoice() {
  const hasPlayed = useRef(false)

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      
      const playVoice = () => {
        if (hasPlayed.current) return
        
        const msg = new SpeechSynthesisUtterance("Welcome to Apex. Performance protocols engaged.")
        
        // Tweak pitch and rate for a more "AI / Jarvis" cinematic feel
        msg.pitch = 0.6
        msg.rate = 0.9
        msg.volume = 1.0

        // Find a suitable voice if available (Male, English)
        const voices = window.speechSynthesis.getVoices()
        const jarvisVoice = voices.find(
          (v) => v.name.includes("Google UK English Male") || v.name.includes("Great Britain")
        )
        if (jarvisVoice) {
          msg.voice = jarvisVoice
        }

        window.speechSynthesis.speak(msg)
        hasPlayed.current = true
      }

      // Browsers block audio from playing automatically on refresh without user interaction.
      // So, we attach the voice trigger to the very first click, scroll, or keypress the user makes.
      const handleInteraction = () => {
        playVoice()
        // Once played, remove the event listeners so it doesn't trigger again
        window.removeEventListener("click", handleInteraction)
        window.removeEventListener("keydown", handleInteraction)
        window.removeEventListener("scroll", handleInteraction)
      }

      window.addEventListener("click", handleInteraction)
      window.addEventListener("keydown", handleInteraction)
      window.addEventListener("scroll", handleInteraction)

      return () => {
        window.removeEventListener("click", handleInteraction)
        window.removeEventListener("keydown", handleInteraction)
        window.removeEventListener("scroll", handleInteraction)
        window.speechSynthesis.cancel() // Stop speaking if component unmounts
      }
    }
  }, [])

  return null
}
