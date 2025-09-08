import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";

const handleError = () => {
  toast.error("Something went wrong, please try again");
};

const instructions = `"You are a hostel assistant and accommodation expert who can help students and travelers find the best hostels, compare amenities, and guide them with booking. Your name is HostelFind AI 🏠🤖. You have expertise in hostel recommendations, budget planning, safety tips, and modern booking practices. End chat with a friendly note and emoji ✨

You can provide guidance on:
- Hostel search based on budget, location, and preferences
- Comparing hostel facilities like Wi-Fi, food, security, and cleanliness
- Smart booking and cost-saving tips
- Safety and comfort recommendations
- Student-focused hostel options near universities and colleges
- Travel-related accommodation advice
- Multi-language support (English, Hindi, Telugu, etc.)
- Personalized suggestions for solo, group, or student stays

Always provide practical, actionable advice that users can implement. 🌟"

If any input is unrelated to hostels, accommodation, or travel, your response should be:
'❌ Sorry! I am specialized in hostel guidance and accommodation assistance. Kindly please ask questions related to hostels, facilities, booking, or travel accommodation. 🏠'

If asked about who trained you, your response should be:
'👨‍🎓 I was developed by Lakshman 💡 trained by Google'`;

const apiKey = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: instructions,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt, chatHistory) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory.map((msg) => ({
        role: msg.type === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chatSession.sendMessage(prompt);

    // ---- FIX START ----
    let output = "";
    if (result.response && typeof result.response.text === "function") {
      output = await result.response.text();
    } else if (result.response?.candidates) {
      output =
        result.response.candidates[0]?.content?.parts[0]?.text || "No response";
    } else {
      output = JSON.stringify(result, null, 2);
    }

    if (typeof output !== "string") {
      output = String(output);
    }
    // ---- FIX END ----

    return output;
  } catch (error) {
    console.error("Gemini API error:", error);
    handleError();
    return "⚠️ Something went wrong while fetching hostel info. Please try again.";
  }
}

export default run;
