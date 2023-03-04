import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ProgressBar } from "react-loader-spinner";
import "./assets/imageSl.css";
import Images from "./Images";
function ImageSlider() {
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		axios
			.get(
				"https://api.unsplash.com/photos?client_id=JsC7huJJRSLGROk9YhdYAAbzVdAPt4PxP1WUlmwZQAs"
			)
			.then((res) => {
				console.log(res.data);
				setImages(res.data);
				setLoader(false);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [setImages]);

	return (
		<>
			{loader ? (
				<>
					<ProgressBar
						height="80"
						width="80"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass="progress-bar-wrapper"
						borderColor="#000000"
						barColor="#51E5FF"
					/>
				</>
			) : (
				<Carousel fade className="carousel-main">
					{images.map((image) => {
						return (
							<Carousel.Item key={image.id}>
								<img
									className="d-block h-500 w-100 align-items-center"
									src={image.urls.regular}
									alt="First slide"
								/>
								<Carousel.Caption>
									<p></p>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			)}
		</>
	);
}

export default ImageSlider;
