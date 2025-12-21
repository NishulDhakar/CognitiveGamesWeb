"use client";
import Container from "@/components/common/Container";
import About from "@/components/Landing/About";
import FAQ from "@/components/Landing/FAQ";
import Hero from "@/components/Landing/Hero";
import Testimonial from "@/components/Landing/Testimonial";
import Poll from "@/components/Landing/Poll";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonial />
      <Poll />
      <FAQ />
    </div>
  );
}
