import { Metadata } from 'next';
import HowItWorksContent from './HowItWorksContent';

export const metadata: Metadata = {
  title: "How It Works | MyBestSongGift - Create a Song in 3 Steps",
  description: "See how we turn your story into a custom studio-quality song. Easy process: tell us your story, we compose the music, and you get a hit in 24 hours.",
  openGraph: {
    title: "How It Works | MyBestSongGift",
    description: "From memory to melody in 24 hours. Learn about our simple 3-step process.",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}