import React, { useState } from "react";
import axios from "axios";
import DisplayText from "./DisplayText";

const SemanticAnalyzer = () => {
  const [query, setQuery] = useState("Wow a Cake");
  const [result, setResult] = useState("Neutral");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://gemini-ask-server.onrender.com/ask", {
        prompt: `${query}, that was a sentence now with one word what type of sentiment it was`
      });
      setResult(response.data.Response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sentimental Analyzer</h1>
          <p className="text-gray-600">Analyze the sentiment of your text using Rapid API</p>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a sentence"
            className="px-4 py-2 text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:bg-purple-700"
          >
            Analyze
          </button>
        </form>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Result:</h3>
          <p className="text-2xl">
            <DisplayText value={result} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SemanticAnalyzer;
