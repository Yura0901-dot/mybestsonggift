import AboutPriceSection from "@/app/ui/component/AboutPrice"
import ReviewSection from "@/app/ui/component/review/ReviewSection"
import FAQSection from "@/app/ui/component/faq/FAQSection"
import HeroSection from "@/app/ui/component/HeroSections"
import StepsSection from "@/app/ui/component/steps/StepsSection"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "SongToGift | Perfect Custom Songs for Any Occasion",
  description: "Create unique, personalized songs for your loved ones. The perfect musical gift for birthdays, weddings, and anniversaries.",
  keywords: ["custom song", "personalized gift", "anniversary music", "song gift"],
  openGraph: {
    title: "SongToGift | Create Your Personalized Musical Gift",
    description: "Surprise your loved ones with a custom-written song. Order your unique gift today!",
    type: "website",
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
      <ReviewSection/>
      <AboutPriceSection/>
      <StepsSection/>
      <FAQSection/>
    </>
  )
}

export default Home