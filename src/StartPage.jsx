import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Menu from "./Menu";
const StartPage = () => {
	return (
		<div>
			<Menu />
			<ImageSlider />
			<Footer />
		</div>
	);
};

export default StartPage;
