'use client';

import { navbarConfig } from '@/data/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import GitHubStars from '../Landing/GithubStar';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const altText = pathname === '/' ? 'Blync' : 'Dashboard';

  return (
    <header className="border-b border-gray-700/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={navbarConfig.logo.src}
            alt={altText}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
            priority
          />
          <span className="font-bold text-lg hidden md:block">{altText}</span>
        </Link>

        <nav className="flex items-center gap-8">
          {navbarConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex justify-between gap-2">
            <GitHubStars />
          </div>
        </div>
      </div>
    </header>
  );
}
