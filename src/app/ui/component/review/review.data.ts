import { ReviewItem } from "./review.interface"

export const reviews: ReviewItem[] = [
  {
    id: 1,
    type: 'video',
    videoSrc: '/review1.mp4',
    role: "Husband"
  },
  {
    id: 2,
    type: 'text',
    rating: 5,
    content: "I've never seen my dad cry before. Like, never. We played this song at his 60th birthday party and he just broke down in happy tears. Best $59 I've ever spent. Seriously.",
    author: "Sarah Jenkins"
  },
  {
    id: 3,
    type: 'press',
    content: "The most personal gift you can give when words just aren't enough.",
    pressLogo: "Brides.com",
    author: "Editorial Team"
  },
  {
    id: 4,
    type: 'video',
    videoSrc: '/review2.mp4',
  },
  {
    id: 5,
    type: 'text',
    rating: 5,
    content: "Ordering was super easy. I just filled out a quick form about how we met in college, and 3 days later I got a studio-quality track. My girlfriend thought I hired a famous producer! 😂",
    author: "Chris Evans",
    role: "Boyfriend"
  },
  {
    id: 6,
    type: 'text',
    rating: 5,
    content: "Magia assoluta. Grazie per avermi aiutato a fare la proposta!",
    author: "Jessica M."
  }
]