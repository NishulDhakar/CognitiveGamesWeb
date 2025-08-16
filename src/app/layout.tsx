// import Footer from '@/components/common/Footer';
// import Navbar from '@/components/common/Navbar';

import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
// import Providers from '@/components/common/Providers';
import './globals.css';

import Header from '@/components/common/Header';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className="font-hanken-grotesk antialiased bg-[#efe9d5]">
          {/* <Providers> */}
            <ReactLenis root>
                  <Header />
              {children}
  
            </ReactLenis>
          {/* </Providers> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
