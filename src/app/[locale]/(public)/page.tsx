import AboutPriceSection from "@/app/ui/component/AboutPrice"
import ExamplesSections from "@/app/ui/component/ExamplesSection"
import FaqSection from "@/app/ui/component/faq"
import HeroSection from "@/app/ui/component/HeroSections"
import StepsSection from "@/app/ui/component/Step"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <ExamplesSections/>
      <AboutPriceSection/>
      <StepsSection/>
      <FaqSection/>
    </>
  )
}

export default Home