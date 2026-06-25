import { Navbar } from "@/components/ui/navbar"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Apex Browser ("Software"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the Software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. License Grant</h2>
            <p>
              Apex Browser grants you a personal, worldwide, royalty-free, non-assignable, and non-exclusive license to use the software provided to you as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by Apex Browser, in the manner permitted by these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Use of AI Features</h2>
            <p>
              The Apex AI Copilot feature integrates with third-party Large Language Models (LLMs). By using this feature, you agree to comply with the terms of service of the respective AI providers (e.g., OpenAI, Anthropic, Google). You are solely responsible for the content of your prompts and the use of the AI-generated outputs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Acceptable Use</h2>
            <p>You agree not to use the Apex Browser to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Violate any local, state, national, or international law.</li>
              <li>Attempt to reverse engineer, decompile, or extract the source code of the proprietary components of the Software.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Disclaimer of Warranties</h2>
            <p>
              The Software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from, out of, or in connection with the Software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Updates & Modifications</h2>
            <p>
              Apex Browser may automatically download and install updates from time to time. These updates are designed to improve, enhance, and further develop the Services. You agree to receive such updates (and permit Apex Browser to deliver these to you) as part of your use of the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms of Service, please contact <a href="mailto:apex.org.91@gmail.com" className="text-cyan-400 hover:underline">apex.org.91@gmail.com</a>.
            </p>
          </section>
          
          <p className="text-sm text-gray-500 pt-8 border-t border-white/10">Last updated: May 6, 2026</p>
        </div>
      </main>
    </div>
  )
}
