import { createContext, useState } from "react";
import run from "../../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setChatHistory([]);
  };

  // 🔹 Format markdown/text into styled HTML
  const formatResponse = (text) => {
    let formattedText = text;

    formattedText = formattedText.replace(
      /^### (.*$)/gm,
      '<h3 style="font-size: 1.2em; font-weight: bold; margin: 12px 0 8px 0; color: #1f2937;">$1</h3>'
    );
    formattedText = formattedText.replace(
      /^## (.*$)/gm,
      '<h2 style="font-size: 1.4em; font-weight: bold; margin: 10px 0 10px 0; color: #1f2937;">$1</h2>'
    );
    formattedText = formattedText.replace(
      /^# (.*$)/gm,
      '<h1 style="font-size: 1.6em; font-weight: bold; margin: 12px 0 12px 0; color: #1f2937;">$1</h1>'
    );

    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedText = formattedText.replace(
      /(?<!\*)\*([^*]+)\*(?!\*)/g,
      "<em>$1</em>"
    );

    formattedText = formattedText.replace(
      /^(\d+\.\s)/gm,
      '<br><strong style="color: #374151;">$1</strong>'
    );

    formattedText = formattedText.replace(
      /^[-•]\s/gm,
      '<br><span style="color: #374151; font-weight: 500;">• </span>'
    );

    formattedText = formattedText.replace(
      /```([\s\S]*?)```/g,
      '<code style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; display: block; margin: 8px 0; font-family: monospace; border-left: 3px solid #d1d5db;">$1</code>'
    );

    formattedText = formattedText.replace(
      /`([^`]+)`/g,
      '<code style="background-color: #f3f4f6; padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>'
    );

    formattedText = formattedText.replace(/\n\n/g, '</p><p style="margin-bottom: 12px;">');
    formattedText = formattedText.replace(/\n/g, "<br>");

    if (!formattedText.startsWith("<p>") && !formattedText.startsWith("<h")) {
      formattedText = '<p style="margin-bottom: 12px;">' + formattedText + "</p>";
    }

    formattedText = formattedText.replace(/<p[^>]*><\/p>/g, "");
    formattedText = formattedText.replace(/(<br>){3,}/g, "<br><br>");
    formattedText = formattedText.replace(/\s+/g, " ");

    return formattedText.trim();
  };

  const onSent = async (prompt) => {
    setShowResult(true);
    setResultData("");
    setLoading(true);

    let userMessage = prompt !== undefined ? prompt : input.trim();
    if (!userMessage) return;

    if (prompt === undefined) {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
    }

    // ✅ Push user message
    setChatHistory((prev) => [...prev, { type: "user", text: userMessage }]);

    try {
      let rawResponse = await run(userMessage, chatHistory);

      // ✅ Try parsing JSON
      try {
        const parsed = JSON.parse(rawResponse);

        // Push structured JSON as-is (HostelCard will render it)
        setChatHistory((prev) => [...prev, { type: "bot", text: JSON.stringify(parsed) }]);
      } catch {
        // Not JSON → treat as markdown/text
        let formattedResponse = formatResponse(rawResponse);
        let responseWords = formattedResponse.split(" ");

        // Push empty bot message
        setChatHistory((prev) => [...prev, { type: "bot", text: "" }]);

        // Streaming typing effect
        responseWords.forEach((word, i) => {
          setTimeout(() => {
            setChatHistory((prev) => {
              let updatedHistory = [...prev];
              let lastIndex = updatedHistory.length - 1;
              let separator = i === 0 ? "" : " ";
              updatedHistory[lastIndex] = {
                ...updatedHistory[lastIndex],
                text: updatedHistory[lastIndex].text + separator + word,
              };
              return updatedHistory;
            });
          }, 75 * i);
        });
      }
    } catch (error) {
      console.error("Error in onSent:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text: JSON.stringify({
            error: "⚠️ Oops! Something went wrong. Please try again.",
          }),
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        chatHistory,
        onSent,
        newChat,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
