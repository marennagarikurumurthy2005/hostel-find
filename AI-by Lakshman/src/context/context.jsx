import { createContext, useEffect, useState } from "react";
import run from "../../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompts] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const onSent = async (prompt) => {
    setResultData("");
    setRecentPrompts(input);
    setLoading(true);
    setShowResult(true);
    const response = await run(input);
    setResultData(response);
    setLoading("");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompts,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
