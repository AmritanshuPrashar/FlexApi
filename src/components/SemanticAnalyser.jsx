import React, { useState } from "react";
import axios from "axios";
import DisplayText from "./DisplayText";

const SemanticAnalyzer = () => {
  const [query, setQuery] = useState("Wow a Cake");
  const [result, setResult] = useState("Neutral");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://emodex-emotions-analysis.p.rapidapi.com/rapidapi/emotions",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d9e72d5342msha5223a25ee12e1fp176a8djsn77e13318c0fa",
        "X-RapidAPI-Host": "emodex-emotions-analysis.p.rapidapi.com",
      },
      data: JSON.stringify({ sentence: query }),
    };

    try {
      const response = await axios.request(options);
	  delete response.data.sentence.text;
      const max = Object.entries(response.data.sentence).reduce(
        (prev, curr) => {
          return prev[1] > curr[1] ? prev : curr;
        }
		);
		console.log(response.data.sentence)
		setResult(max[0]);
		console.log(result)	
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sentimental Analyzer
          </h1>
          <p className="text-gray-700 mb-8">
            A Sentimental Analyzer using Rapid API
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter the paragraph."
            className="px-4 py-2 text-gray-700 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Search
          </button>
        </form>
        <div className="my-4 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Result : </h3>
          <p className="text-gray-700">
            <DisplayText value={result} />
          </p>
        </div>
      </div>
    </>
  );
};

export default SemanticAnalyzer;
