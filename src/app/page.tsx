"use client"
import Container from "@/components/common/Container";
import GamesCard from "@/components/Landing/GamesCard";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
<div>
  <Hero />
  <Container>
    <GamesCard />
  </Container>
  
</div>

  );
}
