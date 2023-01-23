import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Menu from "../Menu";
import { Discuss } from "react-loader-spinner";
import Footer from "./Footer";
const RandomMemeGen = () => {
	const [loader, setLoader] = useState(true);
	const [images, setImages] = useState([]);
	const options = {
		method: "GET",
		url: "https://programming-memes-images.p.rapidapi.com/v1/memes",
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
			"X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
		},
	};

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				setInterval(() => {
					setLoader(false);
				  }, 1000);
				setImages(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	const refreshPage = () => {
		window.location.reload(false);
	};
	return (
		<div>
			<Menu />
			{loader ? ( <Discuss
				visible={true}
				height="80"
				width="80"
				ariaLabel="comment-loading"
				wrapperStyle={{}}
				wrapperClass="comment-wrapper"
				color="#fff"
				backgroundColor="#F4442E"
			/>):(<div className="album bg-light">
			<h2 className=" display- cursor-pointer" onClick={refreshPage}>
				Random Meme Generator
			</h2>
			<p>(Tip : To refresh click on Random Meme Generator)</p>
			<div className="container">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{images.map((image) => (
							<div  key={image.id} className="col">
								<div className="card shadow-sm">
									<img src={image.image} alt="meme-image" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>)}
		<Footer />
		</div>
	);
};

export default RandomMemeGen;
