import Image from "next/image";
import Hero from "./components/Home/Hero/Hero";
import TimeSchbang from "./components/Home/TimeSchbang/TimeSchbang";
import Define from "./components/Home/Define/Define";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimeSchbang />
      <Define />
    </main>
  );
}
