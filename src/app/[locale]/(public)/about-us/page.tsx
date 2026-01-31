import AboutUsContent from "./AboutContent"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MyBestSongGift - Transforming Memories into Music",
  description: "Meet the professional musicians behind MyBestSongGift. We turn your stories into studio-quality custom songs for weddings, birthdays, and anniversaries.",
  openGraph: {
    title: "About Us | MyBestSongGift",
    description: "Create a timeless gift with a custom song. Learn more about our process and team."
  },
};

const AboutUsPage = () => {
  return (
    <AboutUsContent/>
  )
}

export default AboutUsPage