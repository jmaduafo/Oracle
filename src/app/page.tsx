import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";

export default function Home() {

  return (
    <main className="">
      <Hero/>
      <About/>
    </main>
  );
}
