import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const Memes = () => {
	const [memes, setMemes] = useState([]);

	const variants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const options = {
		method: "GET",
		url: "https://programming-memes-images.p.rapidapi.com/v1/memes",
		headers: {
			"X-RapidAPI-Key": "d9e72d5342msha5223a25ee12e1fp176a8djsn77e13318c0fa",
			"X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
		},
	};

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				setMemes(response.data);
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	return (
		<>
			<div className="p-4 bg-gray-200 min-h-screen">
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold text-purple-500">
						Programming Memes
					</h2>
					<p className="text-gray-600">Fetching memes from RapidApi</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{memes.map((meme) => (
						<motion.div
							key={meme.id}
							className="bg-white rounded-lg overflow-hidden shadow-md"
							variants={variants}
							initial="hidden"
							animate="visible"
							transition={{ duration: 0.5 }}
							whileHover={{ y: -5 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="aspect-w-3 aspect-h-4">
								<motion.img
									src={meme.image}
									alt={meme.title}
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.2 }}
								/>
							</div>
							<div className="p-4">
								<h3 className="text-gray-900 font-semibold">{meme.name}</h3>
								<p className="text-gray-600">{meme.url}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default Memes;
