import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayText from "./DisplayText";

const SemanticAnalyser = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState("MID");

	const handleSubmit = async (e) => {
		e.preventDefault();
		axios
			.request(options)
			.then(function (res) {
				if (res.data.neg_percent > res.data.pos_percent) {
					setResult("NEG");
				} else if (res.data.neg_percent < res.data.pos_percent) {
					setResult("POS");
				} else {
					setResult("MID");
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const encodedParams = new URLSearchParams();
	encodedParams.append("text", `${query}`);

	const options = {
		method: "POST",
		url: "https://text-sentiment.p.rapidapi.com/analyze",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": "d9e72d5342msha5223a25ee12e1fp176a8djsn77e13318c0fa",
			"X-RapidAPI-Host": "text-sentiment.p.rapidapi.com",
		},
		data: encodedParams,
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

export default SemanticAnalyser;
