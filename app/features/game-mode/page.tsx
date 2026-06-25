import { Navbar } from "@/components/ui/navbar"
import { Gamepad2, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GameModePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 max-w-5xl">
          <a href="/#features" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </a>

          <div className="space-y-6 mb-12 text-center">
            <div className="h-20 w-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto border border-cyan-500/20 shadow-lg shadow-cyan-500/20">
              <Gamepad2 className="h-10 w-10 text-cyan-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Game Mode
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Never sacrifice your FPS for a browser again. Game Mode intelligently manages your resources.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 mb-16">
            <Image
              src="/game-mode.png"
              alt="Game Mode HUD"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Live Performance HUD</h3>
              <p className="text-gray-300 leading-relaxed">
                Keep track of your system's vitals without needing third-party overlays. The Apex Game Mode HUD provides real-time monitoring of your FPS, RAM usage, CPU load, and Network Ping, all from within the browser engine.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Resource Suspension</h3>
              <p className="text-gray-300 leading-relaxed">
                When you launch a game, Apex detects it and instantly suspends background tabs, frees up RAM, and limits CPU cycles. You get the maximum performance for your game, and your tabs will be right where you left them when you're done.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
