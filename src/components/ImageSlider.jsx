import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./assets/imageSl.css"
import Images from "./Images";
function ImageSlider() {
	const [images, setImages] = useState([])
	const options = {
		method: 'GET',
		url: 'https://premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com/rapidHandler/anime',
		params: {page: '0', sensitivity: '0', quality: '1'},
		headers: {
		  'X-RapidAPI-Key': 'd9e72d5342msha5223a25ee12e1fp176a8djsn77e13318c0fa',
		  'X-RapidAPI-Host': 'premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com'
		}
	  };
	useEffect(() => {
		axios.request(options).then(function (response) {
			setImages(response.data);
		}).catch(function (error) {
			console.error(error);
		});
	

	}, [])
	
	return (
		<Carousel fade className="carousel-main">
			{
				images.map((image) => {
					return (
						<Carousel.Item >
						<img
							className="d-block w-100 align-items-center"
							src={image.arturl}
							alt="First slide"
						/>
						<Carousel.Caption>
								<h3>{image.animename}</h3>
							<p></p>
						</Carousel.Caption>
					</Carousel.Item>
					)
				})
				

			}
		</Carousel>
	);
}

export default ImageSlider;
