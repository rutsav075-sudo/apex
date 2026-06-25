import { Navbar } from "@/components/ui/navbar"
import { Brain, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function FocusModePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 max-w-5xl">
          <a href="/#features" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </a>

          <div className="space-y-6 mb-12 text-center">
            <div className="h-20 w-20 bg-yellow-500/10 rounded-3xl flex items-center justify-center mx-auto border border-yellow-500/20 shadow-lg shadow-yellow-500/20">
              <Brain className="h-10 w-10 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Focus Mode
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in the zone. Block distractions and immerse yourself in deep work.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-500/10 mb-16">
            <Image
              src="/focus-mode.png"
              alt="Focus Mode Dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Built-in Pomodoro & Blockers</h3>
              <p className="text-gray-300 leading-relaxed">
                Set a timer for your work session and let Apex handle the rest. Focus Mode automatically blocks distracting websites (like social media and news) during your active sessions, helping you maintain a flow state without needing external apps.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Ambient Soundscapes</h3>
              <p className="text-gray-300 leading-relaxed">
                Tune out background noise with built-in ambient sounds. Choose between procedural rain, bustling café atmospheres, or Lo-Fi beats. Control the volume directly from the Focus dashboard to create your perfect work environment.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
