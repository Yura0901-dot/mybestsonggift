export interface ReviewItem {
  id: number
  type: 'video' | 'text' | 'press'
  author?: string
  role?: string 
  content?: string
  videoSrc?: string
  pressLogo?: string
  rating?: number
}