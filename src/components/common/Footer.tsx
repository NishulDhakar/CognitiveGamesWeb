import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Brain, Mail, Github, Twitter, Linkedin } from "lucide-react";

import { footerNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
    { name: "GitHub", href: siteConfig.links.github, icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/nishuldhakar", icon: Linkedin },
  ];

  return (
    <footer className="mt-20 border-t border-border/40 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Blync</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Master cognitive ability tests with our scientifically designed practice platform. Prepare for Capgemini, Cognizant, and other placement assessments.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Games</h3>
            <ul className="space-y-3">
              {footerNavItems.games.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {footerNavItems.resources.slice(3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Guides Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources & Guides</h3>
            <ul className="space-y-3">
              {footerNavItems.resources.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-3">
              {footerNavItems.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-border/40" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Blync. All rights reserved.
            </p>
          </div>

          <div className="group flex items-center gap-2">
            <Image
              className="size-10 rounded-2xl border border-gray-400 group-hover:border-2"
              src="/og-logo.png"
              width={40}
              height={40}
              alt="Blync logo"
            />
            <p className="text-sm  opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
              <Link target="_blank" href="https://www.nishul.dev">
                Built with ❤️{" "}
                <span className="transition-all duration-300 ease-in-out group-hover:underline">
                  by Nishul
                </span>
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
            <span>•</span>
            <a
              href="mailto:nishuldhakar123@gmail.com"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


