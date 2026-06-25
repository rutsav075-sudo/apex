import { Navbar } from "@/components/ui/navbar"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              At Apex Browser, your privacy isn't just a feature—it's the core foundation of our architecture. 
              This Privacy Policy explains how we handle your data when you use the Apex Browser and its associated services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Data We Do Not Collect</h2>
            <p>To ensure true privacy, Apex Browser is built on a zero-telemetry philosophy:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>We do <strong className="text-white">not</strong> track your browsing history.</li>
              <li>We do <strong className="text-white">not</strong> monitor your keystrokes, searches, or form inputs.</li>
              <li>We do <strong className="text-white">not</strong> sell, rent, or share any personal data with third-party advertisers.</li>
              <li>We do <strong className="text-white">not</strong> track your IP address for marketing purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. How Apex Shields Works</h2>
            <p>
              Apex Shields operates locally on your device using a constantly updated list of over 80,000 tracker and ad network signatures. 
              When a request is blocked, the decision is made entirely within your browser memory. No browsing data is ever sent to our servers for analysis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. AI Copilot Data Handling</h2>
            <p>
              When utilizing the Apex AI Copilot, your prompts and contextual tab data are sent directly to the AI provider you select (e.g., OpenAI, Anthropic, or Google) via secure API endpoints. 
              If you choose to use Local AI models (like Ollama), all processing occurs completely offline on your own hardware, guaranteeing absolute privacy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Local Storage & Sync</h2>
            <p>
              Your bookmarks, passwords, and preferences are stored locally on your device using AES-256 encryption. 
              If you opt-in to Apex Sync, this data is end-to-end encrypted before it leaves your device. We cannot read your synced data, nor can we decrypt it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, or if you believe a vulnerability exists, please contact our security team directly at <a href="mailto:apex.org.91@gmail.com" className="text-cyan-400 hover:underline">apex.org.91@gmail.com</a>.
            </p>
          </section>
          
          <p className="text-sm text-gray-500 pt-8 border-t border-white/10">Last updated: May 6, 2026</p>
        </div>
      </main>
    </div>
  )
}
