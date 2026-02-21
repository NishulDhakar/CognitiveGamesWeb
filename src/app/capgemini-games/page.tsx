import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CapgeminiGamesClient from "./client";

export const metadata: Metadata = {
  title: "Capgemini Game Based Aptitude Test 2025 | Practice & Mock Tests",
  description:
    "Ace the Capgemini cognitive ability test with our real exam-style games. Practice Switch, Grid, Digit, Motion, and Deductive challenges used in 2025 placements.",
  alternates: {
    canonical: `${siteConfig.url}/capgemini-games`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Capgemini game round elimination based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Capgemini game-based aptitude test is typically an elimination round. You must clear the required cut-off in games like Switch Challenge and Deductive Logic to proceed to the next interview stage.",
      },
    },
    {
      "@type": "Question",
      name: "How many games are in the Capgemini cognitive assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are usually 4 to 6 games in the assessment, most commonly including the Switch Challenge, Grid Challenge, Digit Challenge, and Deductive-Inductive reasoning puzzles.",
      },
    },
    {
      "@type": "Question",
      name: "Are the Cognizant GenC games similar to Capgemini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both companies often use similar assessment platforms (like Aon/cut-e). Practicing the Switch Challenge and grid-based logic games will help you pass both.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blync Capgemini Game Prep",
  operatingSystem: "Web",
  applicationCategory: "EducationalApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1742",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function CapgeminiGamesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <CapgeminiGamesClient />
    </>
  );
}
