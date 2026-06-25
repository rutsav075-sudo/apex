import { Navbar } from "@/components/ui/navbar"
import { Bot, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function AiCopilotPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 max-w-5xl">
          <a href="/#features" className="inline-flex items-center text-purple-500 hover:text-purple-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </a>

          <div className="space-y-6 mb-12 text-center">
            <div className="h-20 w-20 bg-purple-500/10 rounded-3xl flex items-center justify-center mx-auto border border-purple-500/20 shadow-lg shadow-purple-500/20">
              <Bot className="h-10 w-10 text-purple-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Apex AI Copilot
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your browser has a brain. Chat, voice control, or let the AI auto-pilot your tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <Image
                src="/ai-providers.png"
                alt="AI Providers Menu"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <Image
                src="/ai-copilot.png"
                alt="AI Copilot Sidebar"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Multi-Provider Neural Engine</h3>
              <p className="text-gray-300 leading-relaxed">
                Why limit yourself to one AI? Apex allows you to select and configure the neural engine powering your Copilot. Choose from cloud providers like Gemini (Recommended), OpenAI, Anthropic, or Groq for ultra-fast Llama 3 responses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Local AI (Private)</h3>
              <p className="text-gray-300 leading-relaxed">
                For ultimate privacy, Apex supports Ollama out of the box. Run powerful AI models directly on your local hardware. No data is sent to the cloud, giving you complete peace of mind while summarizing pages or drafting content.
              </p>
            </div>
            <div className="space-y-4 md:col-span-2 text-center mt-8">
              <h3 className="text-2xl font-bold text-white">Integrated Sidebar</h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                The Copilot lives in a sleek sidebar, always ready to assist. Use quick actions to "Summarize Page", generate "Mind Maps", or "Extract Notes" from any website you visit without switching tabs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
