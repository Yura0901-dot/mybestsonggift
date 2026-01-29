'use client'

import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { ReviewItem } from "./review.interface"

const VideoCard = ({ item }: { item: ReviewItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.muted = false 
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div 
      onClick={togglePlay}
      className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-xl mb-6 bg-black"
    >
      <div className={`relative ${item.id === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'} w-full`}>
        
        <video
          ref={videoRef}
          src={`${item.videoSrc}#t=0.001`} 
          className="w-full h-full object-cover"
          playsInline
          loop
          muted={false}
          preload="metadata"
        />

        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        </div>
        
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
             <Play className="w-8 h-8 fill-white text-white ml-1" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default VideoCard