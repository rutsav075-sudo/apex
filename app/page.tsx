import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Bot,
  Workflow,
  Brain,
  MessageSquare,
  Cog,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Shield,
  Gamepad2,
  Image as ImageIcon,
  Puzzle,
  Download,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-none">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 mb-6 w-fit">
                  Built for Gamers. Powered by AI.
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                  The AI-Powered Gaming Browser
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  Block 80,000+ ads, chat with multiple AI models, and boost your FPS with Game Mode. A browser that finally respects your resources.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="#download">
                    <Button size="lg" className="w-full bg-cyan-500 text-black hover:bg-cyan-400 font-bold">
                      <Download className="mr-2 h-4 w-4" />
                      Download for Windows
                    </Button>
                  </a>
                  <a href="#features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                    >
                      Explore Features
                    </Button>
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm text-neutral-400 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span>Zero Tracking</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why switch to Apex?</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Other browsers are designed to track you, show you ads, and hog your system memory. 
                  Apex is built from the ground up for performance, privacy, and gaming.
                </p>
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-white">Other Browsers:</h4>
                  <p className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    Basic or no built-in ad blocking
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    Resource heavy, dropping your in-game FPS
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    No native AI integration or limited to one provider
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white/[0.03] border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                The Apex Advantage
              </h3>
              <div className="space-y-6 text-gray-300 mt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">9/10 Gaming Features</h4>
                    <p className="text-sm mt-1">Live FPS/RAM HUD and background tab suspension to free resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Bot className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">10/10 AI Integration</h4>
                    <p className="text-sm mt-1">Access Gemini, OpenAI, Claude, and local models directly from the browser.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Built-in Privacy & Shields</h4>
                    <p className="text-sm mt-1">Brave-style ad blocking engine with 80,000+ filter rules active out of the box.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Ultimate Browsing Arsenal</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to game, work, and browse, built right in.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              name="Apex AI Copilot"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-cyan-500/10" />}
              Icon={Bot}
              description="Your browser has a brain. Chat, voice control, or let the AI auto-pilot your browsing. Supports Gemini, OpenAI, Claude, and local Ollama models."
              href="/features/ai-copilot"
              cta="Learn more"
            />
            <BentoCard
              name="Apex Shields"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-cyan-500/10" />}
              Icon={Shield}
              description="Block 80,000+ ad networks, trackers, and malware scripts. Zero ads. Zero tracking. Zero compromise."
              href="/features/apex-shields"
              cta="Learn more"
            />
            <BentoCard
              name="Game Mode"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-cyan-500/10" />}
              Icon={Gamepad2}
              description="Game Mode suspends background tabs, boosts resources, and shows a live FPS/RAM/CPU HUD."
              href="/features/game-mode"
              cta="Learn more"
            />
            <BentoCard
              name="Wallpaper Engine"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-cyan-500/10" />}
              Icon={ImageIcon}
              description="Choose from 3D interactive scenes, 4K photos, YouTube loops, or generate wallpapers with AI."
              href="/features/wallpaper-engine"
              cta="Learn more"
            />
            <BentoCard
              name="Focus Mode"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-cyan-500/10" />}
              Icon={Brain}
              description="Built-in Pomodoro timer with procedural rain, café, and lo-fi ambient sounds. Block distracting sites automatically."
              href="/features/focus-mode"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by our Users</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/novix_091?igsh=MnJwbGc1bGYwNGw1" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1">
              <Card className="bg-black/80 backdrop-blur-sm border-cyan-500/20 hover:bg-white/5 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=novix_091" alt="novix_091" className="w-12 h-12 rounded-full bg-cyan-900/20 object-cover border-2 border-cyan-500/50" />
                      <div>
                        <p className="font-semibold text-white">novix_091</p>
                        <p className="text-sm text-cyan-400">Instagram User</p>
                      </div>
                    </div>
                    <div className="flex text-cyan-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">
                      "Finally, a browser that doesn't eat half my RAM while I'm trying to stream. The Game Mode HUD is a lifesaver."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.instagram.com/itz_sachin_057?igsh=c2QxNnp6YXh4MjF4" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1">
              <Card className="bg-black/80 backdrop-blur-sm border-purple-500/20 hover:bg-white/5 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=itz_sachin_057" alt="itz_sachin_057" className="w-12 h-12 rounded-full bg-purple-900/20 object-cover border-2 border-purple-500/50" />
                      <div>
                        <p className="font-semibold text-white">itz_sachin_057</p>
                        <p className="text-sm text-purple-400">Instagram User</p>
                      </div>
                    </div>
                    <div className="flex text-purple-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">
                      "Having multiple AI models built directly into the sidebar means I don't need 10 tabs open just to research a topic."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.instagram.com/itz__annu_x4?igsh=eW1mdGZxdjI3N2E3" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1">
              <Card className="bg-black/80 backdrop-blur-sm border-green-500/20 hover:bg-white/5 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=itz_annu_x4" alt="itz_annu_x4" className="w-12 h-12 rounded-full bg-green-900/20 object-cover border-2 border-green-500/50" />
                      <div>
                        <p className="font-semibold text-white">itz_annu_x4</p>
                        <p className="text-sm text-green-400">Instagram User</p>
                      </div>
                    </div>
                    <div className="flex text-green-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">
                      "The ad blocker is insane. I haven't seen a YouTube ad or a popup since I switched, and pages load instantly."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">By the Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The power of Apex Browser at a glance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-red-900/40 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">80,000+</h3>
              <p className="text-gray-300">Ad Filter Rules</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto border border-purple-500/20">
                <Bot className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">7</h3>
              <p className="text-gray-300">AI Providers Supported</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
                <Brain className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">100+</h3>
              <p className="text-gray-300">Free AI Models Included</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                <Puzzle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">14+</h3>
              <p className="text-gray-300">Built-in Extensions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Setup in Seconds</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to game? Getting started with Apex is effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-cyan-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Download & Install</h3>
              <p className="text-gray-300">
                Get the lightweight Windows installer. Imports your bookmarks and passwords from Chrome instantly.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-purple-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Customize Your Hub</h3>
              <p className="text-gray-300">
                Set up your RGB overlay, choose a 3D live wallpaper, and add widgets to your dashboard.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-green-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Start Gaming</h3>
              <p className="text-gray-300">
                Toggle Game Mode, let Apex suspend background tabs, and experience higher frame rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="relative py-24 overflow-hidden">
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#00d4ff", "#bf00ff", "#ff0055", "#00ffcc", "#1E1E1E", "#2D2D2D"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Ready to upgrade your browser?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 font-bold px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Apex for Windows
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4 relative z-20">Free forever. Requires Windows 10/11.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 via-black to-black" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">APEX</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built for Gamers. Powered by AI. The ultimate browser for performance and privacy.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/apexbrowser?igsh=MWF0Nmt6bTMzMzhnNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Features</h4>
              <ul className="space-y-3">
                {[
                  "Apex Shields",
                  "AI Copilot",
                  "Game Mode",
                  "Focus Mode",
                  "Wallpaper Engine",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Community", href: "#" },
                  { name: "Support", href: "#" },
                  { name: "Changelog", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:apex.org.91@gmail.com" className="hover:text-white transition-colors duration-300">
                    apex.org.91@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">© 2026 Apex Browser. All rights reserved.</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
