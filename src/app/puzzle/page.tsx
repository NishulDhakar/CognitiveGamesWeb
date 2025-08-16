"use client"

import { useEffect, useState } from "react"

interface PuzzleData {
  id: number;
  question: string;
  answers: string[];
   grid: string[][]; 
   solution?: string;
}

export default function AIPuzzlePage() {
  const [puzzle, setPuzzle] = useState<PuzzleData | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchPuzzle = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/ai/generate-puzzle', {
        method: "POST",
        body: JSON.stringify({ difficulty: "medium" }),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()

      if (res.ok && data.puzzle) {
        setPuzzle(data.puzzle)
      } else {
        console.error("Puzzle error:", data.error)
        setPuzzle(null)
      }
    } catch (err) {
      console.error("Fetch error:", err)
      setPuzzle(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPuzzle()
  }, [])

  if (loading) {
    return (
      <div className="p-4 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="w-8 h-8 bg-gray-200 rounded" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!puzzle) {
    return (
      <div className="p-4">
        <p className="text-red-500">❌ Failed to load puzzle.</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={fetchPuzzle}
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🧠 AI Puzzle Challenge</h1>

      <pre className="whitespace-pre-wrap">{puzzle.question}</pre>

      <div className="mt-4">
        <h2 className="font-semibold">Puzzle Grid:</h2>
        {Array.isArray(puzzle.grid) ? (
          <div className="grid grid-cols-5 gap-2 mt-2">
            {puzzle.grid.map((row: string[], i: number) => (
              <div key={i} className="flex gap-2">
                {row.map((cell, j) => (
                  <div
                    key={j}
                    className="w-8 h-8 border border-gray-400 flex items-center justify-center"
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 mt-2">⚠️ Invalid puzzle format.</p>
        )}
      </div>

      {puzzle.solution && (
        <div className="mt-4">
          <h2 className="font-semibold">Solution:</h2>
          <p className="text-sm text-gray-700 mt-1">{puzzle.solution}</p>
        </div>
      )}
    </div>
  )
}
