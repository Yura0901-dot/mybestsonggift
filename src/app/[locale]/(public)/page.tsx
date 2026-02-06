import AboutPriceSection from "@/app/ui/component/AboutPrice"
import ReviewSection from "@/app/ui/component/review/ReviewSection"
import FAQSection from "@/app/ui/component/faq/FAQSection"
import HeroSection from "@/app/ui/component/HeroSections"
import StepsSection from "@/app/ui/component/steps/StepsSection"
import { Metadata } from "next"
import Script from "next/script"
import MusicSamples from "@/app/ui/component/sampes/MusicSamples"

export const metadata: Metadata = {
  title: "SongToGift | Perfect Custom Songs for Any Occasion",
  description: "Create unique, personalized songs for your loved ones. The perfect musical gift for birthdays, weddings, and anniversaries.",
  metadataBase: new URL('https://mybestsonggift.com'), 
  keywords: ["custom song", "personalized gift", "anniversary music", "song gift"],
  openGraph: {
    title: "SongToGift | Create Your Personalized Musical Gift",
    description: "Surprise your loved ones with a custom-written song. Order your unique gift today!",
    type: "website",
    url: "https://mybestsonggift.com",
    siteName: "SongToGift",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "SongToGift - Personalized Musical Gift",
      },
    ],
  },
};

const Home = () => {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SongToGift",
            "url": "https://mybestsonggift.com",
            "description": "Create unique, personalized songs for your loved ones. The perfect musical gift for birthdays, weddings, and anniversaries.",
            "image": "https://mybestsonggift.com/opengraph-image.png",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "49.99", 
              "availability": "https://schema.org/InStock",
              "url": "https://mybestsonggift.com/order"
            }
          }
        `}
      </Script>

      <HeroSection/>
      <MusicSamples/>
      <ReviewSection/>
      <AboutPriceSection/>
      <StepsSection/>
      <FAQSection/>
    </>
  )
}

export default Home