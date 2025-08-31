"use client";

import { navbarConfig } from "@/data/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GitHubStars from "../Landing/GithubStar";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Button } from "../ui/ui/button";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/ui/dropdown-menu";
import { signOut } from "@/actions/auth-actions";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  interface UserWithAvatar {
    avatar?: string;
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useUser();
  const userWithAvatar =
    user && "avatar" in user ? (user as UserWithAvatar) : null;

  const pathname = usePathname();
  const altText = pathname === "/" ? "Blync" : "Dashboard";

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <header className="border-b border-gray-700/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={navbarConfig.logo.src}
            alt={altText}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
            priority
          />
          <span className="font-bold text-lg hidden md:block">{altText}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navbarConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "font-semibold"
                    : " hover:border-b hover:border-gray-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side (Sign In / Avatar / Stars) */}
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
                  <AvatarFallback>
                    {user.email?.[0].toUpperCase()}
                  </AvatarFallback>
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="md:hidden px-6 py-4 border-t border-gray-700/60"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col gap-4"
            >
              {navbarConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block transition-colors duration-300 ${
                        isActive
                          ? "font-semibold"
                          : "border-b"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
