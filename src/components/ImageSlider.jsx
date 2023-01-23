import Carousel from "react-bootstrap/Carousel";
import "./assets/imageSl.css"
function ImageSlider() {
	return (
		<Carousel fade className="carousel-main">
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
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Liger Pham</h3>
					<p>Fujikawaguchiko, Yamanashi, Japan</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Tirachard Kumtanom</h3>
					<p>Aerial View of a Shore and Body of Water</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ImageSlider;
