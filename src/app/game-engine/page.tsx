"use client";

import Navbar from "@/components/game-engine/Navbar";
import Hero from "@/components/game-engine/Hero";
import Features from "@/components/game-engine/Features";
import CTA from "@/components/game-engine/CTA";
import { useEffect } from "react";

export default function Page() {

    // Optional: Add smooth scroll behavior or specific page logic here
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        }
    }, []);

    return (
        <main className="w-full relative overflow-x-hidden">
            <Navbar />
            <Hero />
            <Features />
            <CTA />

            <footer className="bg-[#0f0c29] py-10 border-t border-white/10 text-center">
                <div className="font-mono text-xs text-gray-500">
                    <p className="mb-2">Made with 👾 by PixelForge Team</p>
                    <p>© 2026 PixelForge Engine. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
