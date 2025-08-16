import React from "react";
import Music from "./music";

interface GamePageProps {
  title: string;
  level: number;
  timer: string | number;
  children: React.ReactNode;
  extraHeaderContent?: React.ReactNode;
}

const GamePage: React.FC<GamePageProps> = ({
  title,
  level,
  timer,
  children,
  extraHeaderContent,
}) => {
  return (
<div className="mt-8 w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-gradient-to-br">
  {/* Responsive Header */}

  <div className="w-full max-w-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-4 md:px-8 mb-8">
    
      

    {/* Title & Extra Content */}
    <div className=" hidden md:flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 md:space-x-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
        <span className="text-gray-700 font-semibold text-lg">{title}</span>
      </div>
      {extraHeaderContent}
    </div>
    {/* Level & Timer: stacked on mobile, side-by-side on md+ */}
    <div className="flex flex-col-6 sm:flex-row items-center justify-center sm:justify-start gap-4">
         <Music />
      {/* Level Box */}
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
        <span className="text-gray-700 font-semibold text-lg">Level {level}</span>
      </div>

      {/* Timer Box */}
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
        <span className="text-gray-700 font-mono text-lg font-semibold">{timer}</span>
      </div>
    </div>
  </div>

  {/* Children Content */}
  <div className="w-full px-4 md:px-0">{children}</div>
</div>
  );
};

export default GamePage;
