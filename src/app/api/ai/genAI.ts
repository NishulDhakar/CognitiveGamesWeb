import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("❌ Missing GEMINI_API_KEY in environment variables");
}

export class GenAI {
  private client: GoogleGenerativeAI;

  constructor() {
this.client = new GoogleGenerativeAI(apiKey as string);
  }

  getGenerativeModel({ model }: { model: string }) {
    return this.client.getGenerativeModel({ model });
  }
}
