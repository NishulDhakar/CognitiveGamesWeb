// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// import Providers from "@/components/common/Providers";

export const metadata: Metadata = {
  title: "Blync - Placement Puzzle Games for Students",
  description:
    "Blync helps students prepare for campus placements like Capgemini and Cognizant with interactive cognitive games. Practice Swich Challenge, Deductive Challenge, Grid Challenge, and Inductive Challenge to sharpen your problem-solving skills.",
  keywords: [
    "placement preparation games",
    "Capgemini aptitude games",
    "Cognizant puzzle round",
    "campus placement practice",
    "logical reasoning games",
    "Swich Challenge",
    "Deductive Challenge",
    "Grid Challenge",
    "Inductive Challenge",
    "cognitive test practice",
  ],
  openGraph: {
    title: "Blync - Placement Puzzle Practice",
    description:
      "Prepare for campus placements with fun, interactive cognitive puzzles like Swich, Deductive, Grid, and Inductive challenges.",
    url: "https://games.nishul.dev",
    siteName: "Blync",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Blync Placement Puzzle Games",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blync - Cognitive Puzzle Games for Placement Prep",
    description:
      "Sharpen your brain with placement-focused puzzles like Swich, Deductive, Grid, and Inductive Challenges.",
    images: ["/og-logo.png"],
    creator: "@nishuldhakar",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className="font-hanken-grotesk antialiased bg-[#efe9d5] text-gray-900">
          {/* <Providers> */}
          <ReactLenis root>
            <Header />
            <main className="min-h-screen px-4 sm:px-8 max-w-7xl mx-auto">
              {children}
            </main>
            <Footer />
            <Analytics />
          </ReactLenis>
          {/* </Providers> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
