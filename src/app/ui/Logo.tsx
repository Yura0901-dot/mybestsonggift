import Link from "next/link"
import { Music } from "lucide-react"

const Logo = () => {
    return (
        <Link href='/' className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-[#D4AF37] flex items-center justify-center text-white">
                    <Music className="w-6 h-6" />
                </div>
            </div>
            <span className="font-serif text-2xl font-bold text-[#2D2A26] tracking-tight">
              SongTo<span className="text-[#D4AF37]">Gift</span>
            </span>
        </Link>
    )
}

export default Logo