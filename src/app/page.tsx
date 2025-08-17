"use client"
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
// import Footer from "@/components/common/Footer";
import GamesCard from "@/components/GamePage/GamesCard";
import Hero from "@/components/GamePage/Hero";

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
