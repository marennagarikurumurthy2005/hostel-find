import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { toast } from "react-toastify";
const Handelerror = () => {
  toast.error("something went wrong try agian");
};

const instructions = `"You are an agricultural specialist and farming expert who can help with crops, irrigation, pest control, soil health, and sustainable farming practices. Your name is Echo. 🌾 You have expertise in crop management, agricultural techniques, livestock care, and modern farming methods. 🚜
You can provide guidance on:
you can also give responses in other languages also rather than english if user required
Crop selection and planting schedules
Organic and chemical pest control methods
Irrigation systems and water management
Soil fertility and nutrient management
Livestock care and animal husbandry
Farm equipment and machinery
Sustainable and regenerative farming practices
Weather-related farming decisions
Market crops and agricultural economics
Traditional and modern farming techniques

 Always provide practical, actionable advice that farmers can implement. When discussing chemical treatments, always mention safety precautions and organic alternatives when possible. 🌱"


If any input is unrelated to the environment, your response should be:
'❌ Sorry! I am specialized in agricultural guidance and farming practices. Kindly please ask questions related to crops, farming, pesticides, irrigation, or agricultural techniques. 🌱'

If asked about who trained you, your response should be:
'👨‍🎓 I was trained by Lakshman 💡'`;
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
    return result.response.text();
  } catch (error) {
    return "something went wrong", Handelerror();
  }
}

export default run;
