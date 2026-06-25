"use client"

import { Navbar } from "@/components/ui/navbar"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { Heart, Shield, Zap, RefreshCw } from "lucide-react"

const defaultFeedbacks = [
  {
    id: 1,
    name: "novix_091",
    username: "Instagram User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=novix_091",
    text: "Finally, a browser that doesn't eat half my RAM while I'm trying to stream. The Game Mode HUD is a lifesaver.",
    rating: 5,
    link: "https://www.instagram.com/novix_091?igsh=MnJwbGc1bGYwNGw1",
    colorClasses: "border-cyan-500/20",
    avatarClasses: "bg-cyan-900/20 border-cyan-500/50",
    textClasses: "text-cyan-400"
  },
  {
    id: 2,
    name: "itz_sachin_057",
    username: "Instagram User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=itz_sachin_057",
    text: "Having multiple AI models built directly into the sidebar means I don't need 10 tabs open just to research a topic.",
    rating: 5,
    link: "https://www.instagram.com/itz_sachin_057?igsh=c2QxNnp6YXh4MjF4",
    colorClasses: "border-purple-500/20",
    avatarClasses: "bg-purple-900/20 border-purple-500/50",
    textClasses: "text-purple-400"
  },
  {
    id: 3,
    name: "itz_annu_x4",
    username: "Instagram User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=itz_annu_x4",
    text: "The ad blocker is insane. I haven't seen a YouTube ad or a popup since I switched, and pages load instantly.",
    rating: 5,
    link: "https://www.instagram.com/itz__annu_x4?igsh=eW1mdGZxdjI3N2E3",
    colorClasses: "border-green-500/20",
    avatarClasses: "bg-green-900/20 border-green-500/50",
    textClasses: "text-green-400"
  }
]

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState(defaultFeedbacks)
  const [newName, setNewName] = useState("")
  const [newFeedback, setNewFeedback] = useState("")
  const [newRating, setNewRating] = useState(5)

  useEffect(() => {
    async function fetchFeedbacks() {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from('feedbacks')
            .select('*')
            .order('created_at', { ascending: false })
          
          if (data && data.length > 0) {
            setFeedbacks([...data, ...defaultFeedbacks])
          }
        } catch (e) {
          console.error("Supabase fetch error:", e)
        }
      } else {
        const saved = localStorage.getItem("apex-feedbacks")
        if (saved) {
          setFeedbacks(JSON.parse(saved))
        }
      }
    }
    fetchFeedbacks()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newFeedback.trim()) return

    const newEntry = {
      id: Date.now(),
      name: newName,
      username: "Community User",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(newName)}`,
      text: newFeedback,
      rating: newRating,
      link: "#",
      colorClasses: "border-blue-500/20",
      avatarClasses: "bg-blue-900/20 border-blue-500/50",
      textClasses: "text-blue-400"
    }

    const updatedFeedbacks = [newEntry, ...feedbacks]
    setFeedbacks(updatedFeedbacks)

    if (supabase) {
      try {
        await supabase.from('feedbacks').insert([{
          name: newEntry.name,
          username: newEntry.username,
          avatar: newEntry.avatar,
          text: newEntry.text,
          rating: newEntry.rating,
          link: newEntry.link,
          colorClasses: newEntry.colorClasses,
          avatarClasses: newEntry.avatarClasses,
          textClasses: newEntry.textClasses
        }])
      } catch (e) {
        console.error("Supabase insert error:", e)
      }
    } else {
      localStorage.setItem("apex-feedbacks", JSON.stringify(updatedFeedbacks))
    }
    
    setNewName("")
    setNewFeedback("")
    setNewRating(5)
  }

  // Duplicate the feedbacks array for the infinite marquee effect
  const marqueeFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-hidden">
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Community Feedback
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your voice shapes the future of Apex Browser. Tell us what you love and what we can improve.
          </p>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto mb-20 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Leave Your Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="How should we call you?"
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className={`text-3xl transition-transform hover:scale-110 ${star <= newRating ? "text-cyan-400" : "text-gray-600"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Thoughts</label>
              <textarea 
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                placeholder="What features do you want to see? Did you find any bugs?"
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all min-h-[120px] resize-y"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-cyan-500 text-black hover:bg-cyan-400 font-bold py-6 text-lg rounded-xl">
              Submit Feedback
            </Button>
          </form>
        </div>

        {/* How Feedback Helps Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">How Your Feedback Helps Us Improve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center space-y-4">
              <div className="h-14 w-14 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Performance Tuning</h4>
              <p className="text-gray-400">
                When you report memory usage or FPS drops, our engineers use that data to optimize the Game Mode engine.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center space-y-4">
              <div className="h-14 w-14 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Ad-Blocker Updates</h4>
              <p className="text-gray-400">
                Feedback about unblocked ads helps us update our 80,000+ signature shields instantly for everyone.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center space-y-4">
              <div className="h-14 w-14 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-white">New Features</h4>
              <p className="text-gray-400">
                Community requests dictate our roadmap. If enough people ask for a new AI model, we integrate it.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Marquee Slider Section */}
      <div className="w-full overflow-hidden bg-black py-10 relative border-t border-b border-white/10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <h3 className="text-2xl font-bold text-center text-white mb-10">What the Community is Saying</h3>
        
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[120vw] animate-marquee hover:[animation-play-state:paused]">
          <div className="flex w-full justify-around space-x-6 px-4">
            {marqueeFeedbacks.map((fb, index) => (
              <div key={`${fb.id}-${index}`} className="w-[350px] shrink-0">
                <Card className={`bg-black/80 backdrop-blur-sm ${fb.colorClasses} hover:bg-white/5 transition-colors h-full`}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img src={fb.avatar} alt={fb.name} className={`w-12 h-12 rounded-full object-cover border-2 ${fb.avatarClasses}`} />
                        <div>
                          <p className="font-semibold text-white truncate max-w-[150px]">{fb.name}</p>
                          <p className={`text-sm ${fb.textClasses}`}>{fb.username}</p>
                        </div>
                      </div>
                      <div className={`flex ${fb.textClasses}`}>{"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}</div>
                      <p className="text-gray-300 line-clamp-3">"{fb.text}"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  )
}
