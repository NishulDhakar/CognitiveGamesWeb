// import { NextRequest, NextResponse } from "next/server";
// import { GenAI } from "@/app/api/ai/genAI"; // adjust this path if needed

// const genAI = new GenAI();

// export async function POST(req: NextRequest) {
//   try {
//     const { difficulty } = await req.json();

//     const prompt = `Generate a ${difficulty} level logic puzzle as JSON.
// Return in this format:
// {
//   "question": "string",
//   "grid": [["1", "0", "1"], ["0", "1", "0"]],
//   "solution": "string explanation"
// }`;

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });


//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     if (!text) {
//       return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
//     }

//     const puzzle = JSON.parse(text);
//     return NextResponse.json({ puzzle });
//   } catch (err) {
//     console.error("❌ Server error:", err);
//     return NextResponse.json({ error: "Server error generating puzzle" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const dummyPuzzle = {
      id: 1,
      question: "What comes next? ➕, ⭕, △, ...",
      options: ["◻️", "⬛", "⭐", "⬤"],
      answer: "⬤",
    };

    return NextResponse.json({ success: true, puzzle: dummyPuzzle });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate puzzle." },
      { status: 500 }
    );
  }
}

