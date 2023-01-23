import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import "./assets/translate.css"
import Footer from "./Footer";

const TranslateText = () => {
	const [options, setOptions] = useState([]);
	const [to, setTo] = useState("en");
	const [from, setFrom] = useState("Detect Language");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [displayFrom, setDisplayFrom] = useState("Detect Language");
	const translate = () => {
		let apiURl = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;
		axios.get(apiURl).then((res) => {
			setOutput(res.data.responseData.translatedText);
		});
	};

	useEffect(() => {
		const option = {
			method: "POST",
			url: "https://microsoft-translator-text.p.rapidapi.com/BreakSentence",
			params: { "api-version": "3.0" },
			headers: {
				"content-type": "application/json",
				"X-RapidAPI-Key": "d9e72d5342msha5223a25ee12e1fp176a8djsn77e13318c0fa",
				"X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
			},
			data: `[{"Text":"${input}"}]`,
		};
		axios
			.request(option)
            .then(function (response) {
                const value = (response.data[0].detectedLanguage.language);
             
                options.map((opt) => {
                    if (value == opt.code) {
                    setDisplayFrom(opt.name)
                    }
                    
                    
            })
				setFrom(response.data[0].detectedLanguage.language);
			})
			.catch(function (error) {
				console.error(error);
			});
	});

	useEffect(() => {
		axios
			.get("https://libretranslate.com/languages", {
				headers: { accept: "application/json" },
			})
			.then((res) => {
				setOptions(res.data);
			});
	}, []);

	return (
		<>
		<Menu />
		<div className="App div-translate">
			
			<div>
				<div className="from div-translate"> From : {displayFrom}</div>
			</div>
			<div className="div-translate">
				<textarea
					onInput={(e) => setInput(e.target.value)}
					cols="50"
					rows="8"
				></textarea>
			</div>
			<div className="to div-translate">
				<span>To </span>
				<select onChange={(e) => setTo(e.target.value)}>
					{options.map((opt) => (
						<option key={opt.code} value={opt.code}>
							{opt.name}
						</option>
					))}
				</select>
			</div>
			<div className="div-translate">
				<textarea cols="50" rows="8" value={output}></textarea>
			</div>
			<button onClick={translate}>Translate</button>
			</div>
			<Footer />
			</>
	);
};

export default TranslateText;
