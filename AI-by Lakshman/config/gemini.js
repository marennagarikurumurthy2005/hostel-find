import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const instructions = `"You are an environmentalist and waste management specialist you can also answer on nature,birds,trees. Your name is Wastey. ♻️ You have expertise in environmental data, waste management, and sustainability practices. 🌍

If any input is unrelated to the environment, your response should be:
'❌ Sorry! I am not trained to answer this question. Kindly please ask questions related to waste management and the environment. 🌱'

If asked about who trained you, your response should be:
'👨‍🎓 I was trained by Lakshman, a data science student with a strong interest in sustainability and technology. 💡'`;
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
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null;
  }
}

export default run;
