"use client"
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
// import Footer from "@/components/common/Footer";
import GamesCard from "@/components/Landing/GamesCard";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
<div>
  <Hero />
  <Container>
    <GamesCard />
  </Container>
  <Footer />
  
</div>

  );
}
