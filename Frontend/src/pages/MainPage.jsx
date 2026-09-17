import Hero from "../components/landing/Hero";
import Introduction from "../components/landing/Introduction";
import FeaturedDishes from "../components/landing/FeaturedDishes";
import StorySection from "../components/landing/StorySection";
import Atmosphere from "../components/landing/Atmosphere";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import { useEffect } from "react";
import socket from "../socket/socket";

export default function MainPage() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected to Socket.IO:", socket.id);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error.message);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);

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
