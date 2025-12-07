"use client";
import Container from "@/components/common/Container";
import About from "@/components/Landing/About";
import FAQ from "@/components/Landing/FAQ";
import Hero from "@/components/Landing/Hero";
import Testimonial from "@/components/Landing/Testimonial";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <About />
        <Testimonial />
        <FAQ />
      </Container>
    </div>
  );
}
