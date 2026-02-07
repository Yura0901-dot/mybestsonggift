import { 
  Sparkles, Guitar, Mic2, Drum, Headphones, 
  Star, Piano, Clapperboard, Speaker
} from "lucide-react"

export const GENRES = [
  { id: 'pop', label: 'Pop / Top 40', icon: Sparkles, color: 'text-pink-500', desc: 'Catchy & Upbeat' },
  { id: 'acoustic', label: 'Acoustic / Folk', icon: Guitar, color: 'text-amber-600', desc: 'Warm & Intimate' },
  { id: 'hiphop', label: 'Hip-Hop / R&B', icon: Mic2, color: 'text-purple-600', desc: 'Rhythmic & Cool' },
  { id: 'rock', label: 'Rock', icon: Drum, color: 'text-red-600', desc: 'Energetic & Bold' },
  { id: 'edm', label: 'Electronic / Dance', icon: Headphones, color: 'text-blue-500', desc: 'Party & Club' },
  { id: 'house', label: 'House', icon: Speaker, color: 'text-cyan-500', desc: 'Groovy & Deep' },
  { id: 'country', label: 'Country', icon: Star, color: 'text-orange-500', desc: 'Storytelling' },
  { id: 'jazz', label: 'Jazz / Soul', icon: Piano, color: 'text-indigo-500', desc: 'Classy & Smooth' },
  { id: 'cinematic', label: 'Cinematic', icon: Clapperboard, color: 'text-gray-600', desc: 'Movie Soundtrack' },
]