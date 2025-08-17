'use client';

import { navbarConfig } from '@/data/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import GitHubStars from '../Landing/GithubStar';

export default function Navbar() {
  return (
    <header className="border-b border-gray-700/60 backdrop-blur-sm  sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center ">
          <Image
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
            priority
          />
          <span className="font-bold text-lg hidden md:block text-">{navbarConfig.logo.alt}</span>
        </Link>

        {/* Center: Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navbarConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className=" transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
          {/* Theme Switch (optional) */}
          {/* <button className="p-2 rounded-lg hover:bg-gray-800 transition">
            <Moon className="w-5 h-5 text-gray-300" />
          </button> */}

          <div className='flex items-center gap-2'>
            {/* <Link href="/games">
  <Button
    size="lg"
    className="rounded-xl border  border-black bg-zinc-100 font-semibold text-black transition-all duration-200 hover:bg-[#A35C2D] hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-800"
  >
    Games
  </Button>
</Link> */}

<div className="flex justify-between gap-2">
  <Link href="https://www.nishul.dev/" target="_blank">
  <Button
    size="lg"
    className="rounded-xl border border-black bg-[#A35C2D] font-semibold text-white transition-all duration-200 hover:bg-zinc-100 hover:text-black hover:shadow-md dark:border-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
  >
    Contact
  </Button>
</Link>

   <GitHubStars />

</div>



          </div>


        </div>
    </header>
  );
}
