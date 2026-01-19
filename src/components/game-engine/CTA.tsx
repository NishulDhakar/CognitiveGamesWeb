"use client";

import { PixelButton } from "./PixelComponents";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-t from-[#0f0c29] to-[#12121e]">

            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px]"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]"></div>

            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <h2 className="font-game text-3xl md:text-5xl text-white mb-8 leading-tight">
                    Ready to Build Your World?
                </h2>
                <p className="font-mono text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                    Join thousands of indie developers creating the next generation of pixel art games. No coding experience required.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <PixelButton className="bg-[#fbbf24] text-xl px-10 py-4">
                        Get Started Free
                    </PixelButton>
                    <span className="text-gray-500 font-mono text-sm">No credit card required</span>
                </div>
            </div>
        </section>
    );
}
