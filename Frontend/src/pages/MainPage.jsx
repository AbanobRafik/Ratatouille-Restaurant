import Hero from "../components/landing/Hero";
import Introduction from "../components/landing/Introduction";
import FeaturedDishes from "../components/landing/FeaturedDishes";
import StorySection from "../components/landing/StorySection";
import Atmosphere from "../components/landing/Atmosphere";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function MainPage() {
  return (
    <div className="Sbg-white text-[#252525]">
      <main>
        <Hero />
        <Introduction />
        <FeaturedDishes />
        <StorySection />
        <Atmosphere />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
