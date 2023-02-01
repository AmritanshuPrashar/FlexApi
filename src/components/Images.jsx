import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Images = () => {
	return (
		<>
			<Carousel.Item>
				<img
					className="d-block w-100 align-items-center"
					src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Francesco Ungaro</h3>
					<p>Hot air ballons in the sky.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</>
	);
};

export default Images;
