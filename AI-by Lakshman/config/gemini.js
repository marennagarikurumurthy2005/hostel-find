import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// API Key Handling (Choose ONE of the following methods)

// 1. For Vite projects (if applicable):
const apiKey = import.meta.env.VITE_API_KEY;

// 2. For non-Vite projects (e.g., create-react-app, or Node.js):
// Store your API key securely (environment variables are recommended).
// Example using process.env (make sure to set the environment variable):
// const apiKey = process.env.REACT_APP_API_KEY;  // For React projects
// const apiKey = process.env.API_KEY;          // For Node.js

// 3.  Less secure for client-side applications but convenient for testing (AVOID in production):
// const apiKey = "YOUR_ACTUAL_API_KEY"; //  DANGER: Exposing API keys in client-side code is a security risk.

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Or the model you want to use
});

const generationConfig = {
  temperature: 1,      // Adjust as needed
  topP: 0.95,         // Adjust as needed
  topK: 40,          // Adjust as needed
  maxOutputTokens: 8192, // Adjust as needed
  responseMimeType: "text/plain", // Usually fine for text
};

async function run(prompt) {  // Add prompt as a parameter
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [], // You can add chat history here if needed
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text(); 
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null; // Or handle the error as needed
  }
}

export default run;