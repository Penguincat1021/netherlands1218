import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTravelAssistant = async (question: string, contextLocation: string): Promise<string> => {
  try {
    const systemInstruction = `You are a helpful, knowledgeable local guide and student advisor for a new international student living in Tilburg, Netherlands.
    The user is a Taiwanese student who just arrived (Dec 2024) and stays until 2025.
    
    Current Context: The user is currently interested in: ${contextLocation}.
    
    Key Attributes:
    1. **Practical & Detailed**: Give specific bus numbers, train ticket types (Weekend Vrij etc.), and shop names (Action, HEMA, Kruidvat).
    2. **Student-Budget Friendly**: Focus on student discounts, cheap eats, and affordable travel.
    3. **Christmas Travel**: If asked about Christmas/Winter travel, suggest places accessible by train from Tilburg (e.g., Cologne, Antwerp, Amsterdam, Paris) or cheap flights from Eindhoven Airport.
    4. **Bureaucracy Helper**: If asked about BSN, IND, banking (ING/ABN/Revolut), DigiD, explain clearly step-by-step.
    
    Format: Use concise Markdown. Bold key terms. Keep paragraphs short for mobile reading.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't find an answer for that right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having trouble connecting to the Dutch travel network right now.";
  }
};