import { Navbar } from "@/components/ui/navbar"
import { Image as ImageIcon, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function WallpaperEnginePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 max-w-5xl">
          <a href="/#features" className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </a>

          <div className="space-y-6 mb-12 text-center">
            <div className="h-20 w-20 bg-pink-500/10 rounded-3xl flex items-center justify-center mx-auto border border-pink-500/20 shadow-lg shadow-pink-500/20">
              <ImageIcon className="h-10 w-10 text-pink-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Wallpaper Engine
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your browser canvas into a stunning visual experience.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-pink-500/10 mb-16">
            <Image
              src="/wallpaper-engine.png"
              alt="Wallpaper Engine Gallery"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">4K Static & Dynamic</h3>
              <p className="text-gray-300 leading-relaxed">
                Choose from a curated gallery of high-definition imagery. From deep space nebulas to cyberpunk cities and soft gradients, customize your new tab to match your aesthetic.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">3D Live Scenes</h3>
              <p className="text-gray-300 leading-relaxed">
                Step beyond static images. Apex natively renders WebGL 3D interactive particle scenes that react to your mouse movements, bringing your browser to life without draining your battery.
              </p>
            </div>
             <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Community & Uploads</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly loop YouTube videos as your background, browse the community gallery, or upload your own local videos and images to make the browser truly yours.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
