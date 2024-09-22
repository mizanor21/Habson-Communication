import Hero from "../components/Home/Hero/Hero";
import TimeSchbang from "../components/Home/TimeSchbang/TimeSchbang";
import Define from "../components/Home/Define/Define";
import Solutions from "../components/Home/Solutions/Solutions";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import IntroVideo from "@/components/Home/IntroVideo/IntroVideo";
import Brands from "@/components/Home/Brands/Brands";
import Video from "@/components/Home/IntroVideo/Video";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimeSchbang />
      {/* <Video /> */}
      <IntroVideo />
      <Define />
      <Slideshow />
      <Solutions />
      <Brands />
    </main>
  );
}
