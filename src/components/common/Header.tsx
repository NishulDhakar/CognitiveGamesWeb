"use client";

import { navbarConfig } from "@/data/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubStars from "../Landing/GithubStar";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Button } from "../ui/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, } from "../ui/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/ui/dropdown-menu";
import { signOut } from "@/actions/auth-actions";
import TopBanner from "./TopBanner";


export default function Navbar() {
  interface UserWithAvatar {
    avatar?: string;
  }

  const user = useUser();
  const userWithAvatar = user && 'avatar' in user ? user as UserWithAvatar : null;

  const pathname = usePathname();
  const altText = pathname === "/" ? "Blync" : "Dashboard";

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <header className="border-b border-gray-700/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 h-16">
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
          {!user ? (
            <Link href="/register">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border border-black font-semibold transition-all duration-200 
                           hover:bg-zinc-100 hover:text-black hover:shadow-md 
                           dark:border-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
              >
                <LogIn className="w-4 h-4 mr-2 stroke-black dark:stroke-white" />
                <span>Sign In</span>
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
      <AvatarImage src={userWithAvatar?.avatar} alt={user.email} />
                  <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={5}>
                <DropdownMenuItem onSelect={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <GitHubStars />
        </div>
      </div>
    </header>
  );
}
