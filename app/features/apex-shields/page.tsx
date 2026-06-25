import { Navbar } from "@/components/ui/navbar"
import { Shield, ArrowLeft, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ApexShieldsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 max-w-5xl">
          <a href="/#features" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </a>

          <div className="space-y-6 mb-12 text-center">
            <div className="h-20 w-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto border border-red-500/20 shadow-lg shadow-red-500/20">
              <Shield className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Apex Shields
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Military-grade ad blocking and privacy protection built straight into the core.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-500/10 mb-16">
            <Image
              src="/apex-shields-realistic.png"
              alt="Apex Shields Realistic"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">80,000+ Filter Rules</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Apex doesn't rely on basic blocklists. Our Brave-style ad blocking engine uses over 80,000 aggressive filter rules to eradicate banner ads, video pre-rolls, and invisible trackers before they even load.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Native YouTube & Twitch ad blocking</li>
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Stops malicious scripts and crypto-miners</li>
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Blocks pop-ups and cookie consent banners</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Uncompromising Privacy</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe your data belongs to you. Apex prevents cross-site tracking and browser fingerprinting, ensuring that advertisers cannot follow your activity across the web.
              </p>
               <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Strict fingerprinting protection</li>
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Automatic HTTPS upgrading</li>
                <li className="flex items-start gap-2 text-gray-400"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" /> Clear-on-exit session partitioning</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
