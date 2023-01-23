import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./assets/news.css";
import { v4 as uuidv4 } from "uuid";
import useInput from "./hooks/useInput";
import Menu from "../Menu";
import Footer from "./Footer";
import NewsContainer from "./NewsContainer";
import { Route, Routes } from "react-router-dom";
import NewsNavbar from "./NewsNavbar";
const NewsApi = () => {
	const [error, setError] = useState("");

	const [view, setView] = useState(false);
	const [country, setCountry] = useInput("");
	const [topic, setTopic] = useState("");
	const [idFromButtonClick, setIdFromButtonClick] = useState("");

	const handleClick = (e) => {
		console.log(e.target.value);
	};

	return (
		<>
			<div className="hello">
				<>
					<NewsContainer category={"all"} />
				</>

				{error ? error : null}
			</div>

			<Footer />
		</>
	);
};

export default NewsApi;
