import Image from "next/image";
import Hero from "./components/Home/Hero/Hero";
import TimeSchbang from "./components/Home/TimeSchbang/TimeSchbang";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimeSchbang />
    </main>
  );
}
