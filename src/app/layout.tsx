import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Script from "next/script";

// Lazy load heavy components
const ReactLenis = dynamic(() => import("lenis/react"));

// ✅ OFFICIAL SITE CANONICAL URL
const SITE_URL = "https://www.cognitivegames.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

    other: {
    "google-adsense-account": "ca-pub-5398084204289432",
  },


  title: {
    default:
      "Capgemini & Cognizant Game-Based Aptitude Practice | Blync Placement Games",
    template: "%s | Blync Cognitive Games",
  },

  description:
    "Play real Capgemini & Cognizant game-based aptitude tests on Blync. Practice Switch, Grid, Digit, Motion, Spacio, Inductive & Deductive Challenges with full tutorials, rules, mock tests & solutions for 2025 placements.",

  keywords: [
    "Capgemini game based aptitude test 2025",
    "Capgemini game round practice",
    "Capgemini cognitive ability test",
    "Cognizant GenC game based test",
    "Cognizant puzzle round",
    "placement game based aptitude",
    "Switch Challenge practice",
    "Digit Challenge practice",
    "Grid Challenge practice",
    "Motion Challenge practice",
    "Spacio Challenge practice",
    "Inductive Challenge puzzles",
    "Deductive Challenge puzzles",
    "placement aptitude games",
    "campus placement 2025 preparation",
    "cognitive assessment practice online",
    "capgemini-game-based-aptitude-test-questions",
    "capgemini coding questions",
    "capgemini game based aptitude test",
    "capgemini game based aptitude test 2025",
    "capgemini technical assessment questions",
    "Capgemini Exceller Game Based Aptitude Test",
    "capgemini game based aptitude"
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Capgemini & Cognizant Game-Based Aptitude Practice | Blync",
    description:
      "Free game-based aptitude practice for Capgemini & Cognizant. Play Switch, Digit, Grid, Motion, Spacio, Inductive & Deductive challenges with full solutions.",
    url: SITE_URL,
    siteName: "Blync",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Blync – Game-Based Placement Aptitude Practice",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Capgemini & Cognizant Placement Games | Blync",
    description:
      "Crack Capgemini & Cognizant game-based rounds using Blync cognitive games. Real exam-style practice.",
    images: ["/og-logo.png"],
    creator: "@nishuldhakar",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ STRUCTURED DATA (EXTREME SEO BOOST)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blync Cognitive Games",
  alternateName: "Capgemini & Cognizant Placement Games",
  url: SITE_URL,
  description:
    "Free platform for practicing game-based cognitive aptitude tests used in Capgemini, Cognizant & other campus placements.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blync",
  url: SITE_URL,
  logo: `${SITE_URL}/og-logo.png`,
  sameAs: [
    "https://twitter.com/nishuldhakar",
    "https://github.com/Nishuldhakar",
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Blync Cognitive Placement Games",
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "All",
  description:
    "Interactive game-based aptitude practice platform for placement preparation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

  {/* ✅ Google AdSense */}
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5398084204289432"
    crossOrigin="anonymous"
    strategy="afterInteractive"
  />

  {/* ✅ Google Analytics loader */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-2WMDWXGJK7"
    strategy="afterInteractive"
  />

  {/* ✅ Google Analytics config */}
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2WMDWXGJK7', {
        page_path: window.location.pathname,
      });
    `}
  </Script>

  {/* ✅ Umami Analytics */}
  <Script
    src="https://cloud.umami.is/script.js"
    data-website-id="c97607d1-dd2e-479f-b785-a935c0dd5e79"
    strategy="afterInteractive"
  />

        {/* ✅ STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />

        {/* ✅ PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>

      <body className="bg-white/50 relative">
        {/* The Gradient Approximation Element */}
        <div className="absolute top-0 left-0 w-full h-[600px] opacity-40 mix-blend-multiply pointer-events-none">
          {/* Pink/Red Blob */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#FF6B6B]/50 rounded-full blur-3xl" style={{ filter: 'blur(100px)', transform: 'translate(-20%, -20%)' }}></div>
          {/* Blue/Cyan Blob */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4F46E5]/50 rounded-full blur-3xl" style={{ filter: 'blur(100px)', transform: 'translate(20%, -20%)' }}></div>
        </div>
        <ReactLenis root>
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
