import React from "react";
import { Button } from "../ui/button";

interface ResultCardProps {
  correct: number;
  wrong: number;
  resetGame: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ correct, wrong, resetGame }) => {
  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="text-center space-y-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Challenge Complete
          </h2>
          <p className="text-gray-500 text-sm">Well done! Here are your results</p>
        </div>

        {/* Stats */}
        <div className="space-y-6 mb-12">
          
          {/* Accuracy */}
          {total > 0 && (
            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {accuracy}%
              </div>
              <div className="text-gray-500 text-sm">accuracy</div>
            </div>
          )}

          {/* Horizontal stats */}
          <div className="flex justify-center items-center gap-8 md:gap-12 text-sm">
            <div className="text-center">
              <div className="text-2xl font-semibold text-emerald-600 mb-1">{correct}</div>
              <div className="text-gray-500">correct</div>
            </div>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-2xl font-semibold text-rose-500 mb-1">{wrong}</div>
              <div className="text-gray-500">wrong</div>
            </div>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-700 mb-1">{total}</div>
              <div className="text-gray-500">total</div>
            </div>
          </div>

          {/* Progress bar */}
          {total > 0 && (
            <div className="w-full max-w-md mx-auto">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{width: `${accuracy}%`}}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Button */}
        <Button
          onClick={resetGame}
          variant="outline"
          className="px-8 py-3 text-base font-medium border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 rounded-lg"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
