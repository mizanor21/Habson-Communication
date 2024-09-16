import Hero from "../components/Home/Hero/Hero";
import TimeSchbang from "../components/Home/TimeSchbang/TimeSchbang";
import Define from "../components/Home/Define/Define";
import Solutions from "../components/Home/Solutions/Solutions";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import IntroVideo from "@/components/Home/IntroVideo/IntroVideo";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimeSchbang />
      <IntroVideo />
      <Define />
      <Slideshow />
      <Solutions />
    </main>
  );
}
