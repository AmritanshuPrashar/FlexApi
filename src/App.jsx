import "./App.css";
import "./index.css";
import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import SemanticAnalyser from "./components/SemanticAnalyser";
import Memes from "./components/Memes";
import Home from "./components/Home";
import AiChat from "./components/AiChat";
import Weather from "./components/Weather";
const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sentimentanalyser" element={<SemanticAnalyser />} />
				<Route path="/memes" element={<Memes />} />
				<Route path="/aichat" element={<AiChat />} />
				<Route path="/weather" element={<Weather />} />
			</Routes>
		</>
	);
};

export default App;
