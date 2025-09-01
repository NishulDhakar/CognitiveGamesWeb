"use client";

import { useState } from "react";
import { Play, BookOpen, ChevronRight, Eye, EyeOff } from "lucide-react";

export interface RuleData {
  title: string;
  description: string;
  howToPlay: string[];
  Solution?: string;
  playLink: string;
}

export default function RulePage({ data }: { data: RuleData }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <main className="min-h-screen bg-[#efe9d5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#3B3024] mb-3 sm:mb-4">
            {data.title}
          </h1>
        </div>

        <div className="rounded-xl shadow-lg border border-[#D6CDBE] overflow-hidden bg-white">
          <div className="p-4 sm:p-8 border-b border-[#D6CDBE]">
            <p className="text-[#756b60] text-base sm:text-lg leading-relaxed text-center">
              {data.description}
            </p>
          </div>

          <div className="p-4 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <BookOpen className="text-[#C08457] mr-2 sm:mr-3" size={20} />
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3B3024]">
                How to Play
              </h2>
            </div>

            <div className="space-y-3">
              {data.howToPlay.map((step, index) => (
                <div
                  key={index}
                  className={`group p-3 sm:p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    hoveredStep === index
                      ? "border-[#C08457] bg-[#f5f0e3]"
                      : "border-[#D6CDBE] hover:border-[#C08457] hover:bg-[#f5f0e3]"
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                        hoveredStep === index
                          ? "bg-[#8B5E3C] text-white"
                          : "bg-[#D6CDBE] text-[#3B3024]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p className="text-[#3B3024] flex-1 text-sm sm:text-base leading-relaxed">
                      {step}
                    </p>
                    <ChevronRight
                      className={`transition-transform duration-200 ${
                        hoveredStep === index
                          ? "translate-x-1 text-[#C08457]"
                          : "text-[#B0AFA5]"
                      }`}
                      size={16}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Solution + Play Buttons Side by Side */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              {data.Solution && (
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#A35C2D] text-white rounded-lg font-semibold shadow-md hover:bg-[#8C471B] hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  {showSolution ? (
                    <>
                      <EyeOff className="mr-2" size={18} /> Hide Solution
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2" size={18} /> Show Solution
                    </>
                  )}
                </button>
              )}

              <a
                href={data.playLink}
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#A35C2D] text-white rounded-lg font-semibold shadow-md hover:bg-[#8C471B] hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                <Play className="mr-2" size={18} />
                Play Now
              </a>
            </div>

            {/* Solution Content */}
            {showSolution && data.Solution && (
              <div className="mt-6 transition-all duration-500">
                <div className="p-5 rounded-xl border border-[#D6CDBE] bg-[#fdfcf9] shadow-inner">
                  <h3 className="text-lg font-bold text-[#3B3024] mb-3">
                    Solution
                  </h3>
                  {data.Solution.match(/\.(png|jpg|jpeg)$/i) ? (
                    <img
                      src={data.Solution}
                      alt="Solution"
                      className="mx-auto rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <p className="text-base text-[#3B3024] leading-relaxed">
                      {data.Solution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
