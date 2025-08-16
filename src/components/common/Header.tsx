'use client';

import { navbarConfig } from '@/config/Header';
import Link from 'next/link';

// import Image from 'next/image';
import React from 'react';
// import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <div className="border-b-2 border-gray-600 px-6 py-4 h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left: Logo */}
        {/* <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
        </div> */}

        {/* Center: Nav Items (absolute center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 flex gap-6">
          {navbarConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Optional - Theme Switch or Buttons */}
        {/* <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div> */}
      </div>
    </div>
  );
}
