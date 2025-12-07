"use client";

import React from "react";
import { Mail, Globe, Twitter, Linkedin } from "lucide-react";
import BackToDashboard from "@/components/common/BackToDashboard";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="mb-12">
          <BackToDashboard />
        </div>

        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get in Touch
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "nishuldhakar123@gmail.com",
                href: "mailto:nishuldhakar123@gmail.com",
              },
              {
                icon: Globe,
                label: "Portfolio",
                value: "nishul.dev",
                href: "https://nishul.dev",
              },
              {
                icon: Twitter,
                label: "Twitter",
                value: "@NishulDhakar",
                href: "https://x.com/intent/follow?screen_name=NishulDhakar",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "in/nishuldhakar",
                href: "https://www.linkedin.com/in/nishuldhakar/",
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className="block group h-full"
              >
                <Card className="h-full border bg-card hover:bg-accent/50 transition-colors duration-200">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground break-all group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
