import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capgemini Games Practice | Blync Placement Puzzle Prep",
  description:
    "Play free Capgemini cognitive games online with Blync. Practice Switch, Deductive, Grid, and Inductive Challenges to prepare for Capgemini and Cognizant placement assessments.",
      metadataBase: new URL("https://games.nishul.dev"),
  keywords: [
    "Capgemini games",
    "Capgemini games online",
    "Capgemini cognitive assessment practice",
    "Capgemini aptitude games",
    "Capgemini gamified aptitude test",
    "Capgemini placement games",
    "Capgemini puzzle test",
    "Cognizant games",
    "Cognizant puzzle round",
    "placement preparation games",
    "campus placement practice",
    "logical reasoning games",
    "Switch Challenge",
    "Deductive Challenge",
    "Grid Challenge",
    "Inductive Challenge",
    "cognitive test practice",
  ],
  openGraph: {
    title: "Capgemini Games Practice | Blync",
    description:
      "Prepare for Capgemini and Cognizant placement tests with fun, interactive cognitive games like Switch, Deductive, Grid, and Inductive Challenges.",
    url: "https://games.nishul.dev/capgemini-games",
    siteName: "Blync",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Capgemini Games - Blync Placement Puzzle Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capgemini Games Practice | Blync",
    description:
      "Sharpen your brain with placement-focused cognitive games. Play Switch, Deductive, Grid, and Inductive challenges to prepare for Capgemini & Cognizant tests.",
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
          <ReactLenis root>
              <main className="">
                {children}
              </main>
              <Analytics />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
