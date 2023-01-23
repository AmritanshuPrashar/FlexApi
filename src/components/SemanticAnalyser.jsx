import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayText from "./DisplayText";
import Menu from "../Menu";
import Footer from "./Footer";

const SemanticAnalyser = () => {
	const [value, setValue] = useState("MID");
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const encodedParams = new URLSearchParams();
	encodedParams.append("text", `${text}`);

	const options = {
		method: "POST",
		url: "https://text-sentiment.p.rapidapi.com/analyze",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
			"X-RapidAPI-Host": "text-sentiment.p.rapidapi.com",
		},
		data: encodedParams,
	};

	useEffect(() => {
		axios
			.request(options)
			.then(function (res) {
				if (res.data.neg_percent > res.data.pos_percent) {
					setValue("NEG");
				} else if (res.data.neg_percent < res.data.pos_percent) {
					setValue("POS");
				} else {
					setValue("MID");
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	});

	return (
		<div className="">
			<Menu />
			<div className="container">
			<h2 className="text-muted">Sentiment Analyser</h2>
			<div className="align-self-center">

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Enter the Paragraph / Text"
						onChange={handleChange}
					value={text}
					/>
					<label htmlFor="floatingInput ">Enter the Paragraph / Text</label>
				</div>
			</div>
			<hr className="border border-danger border-2 opacity-50"></hr>
				<DisplayText value={value} />
			</div>
			<Footer />
		</div>
	);
};

export default SemanticAnalyser;
