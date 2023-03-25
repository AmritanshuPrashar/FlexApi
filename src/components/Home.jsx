import { motion } from "framer-motion";

const Home = () => {
	const blocks = [
		{
			id: 1,
			title: "Sentiment Analyser",
			description: "Predicts the sentiment from the text you provides.",
			link: "/sentimentanalyser",
			color: "from-blue-500 to-purple-500",
			image: "src/assets/images/sentiment.png",
		},
		{
			id: 2,
			title: "Memes",
			description: "Randomly generates programming memes from Api.",
			link: "/memes",
			color: "from-green-500 to-teal-500",
			image: "src/assets/images/memes.gif ",
		},
		{
			id: 3,
			title: "Weather",
			description: "Provides weather information, uses OpenWeather Api",
			link: "/feature3",
			color: "from-yellow-500 to-red-500",
			image: "https://via.placeholder.com/300x200/9C27B0/FFFFFF",
		},
		{
			id: 4,
			title: "Feature 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			link: "/feature4",
			color: "from-pink-500 to-rose-500",
			image: "https://via.placeholder.com/300x200/E91E63/FFFFFF",
		},
	];

	const blockVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		hidden: { opacity: 0, y: 50 },
		hover: {
			scale: 1.05,
			boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
			transition: { duration: 0.2, ease: "easeOut" },
		},
	};

	return (
		<div className="pt-5 bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-50 backdrop-blur-md min-h-screen">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{blocks.map((block) => (
						<motion.div
							key={block.id}
							className={`bg-gradient-to-r ${block.color} rounded-md overflow-hidden shadow-lg`}
							variants={blockVariants}
							initial="hidden"
							animate="visible"
							whileHover="hover"
							whileTap="tap"
						>
							<a href={block.link} className="block">
								<div className="relative h-48">
									<img
										className="absolute inset-0 w-full h-full object-cover"
										src={block.image}
										alt=""
									/>
								</div>
								<div className="p-4 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
									<h3 className="text-white font-bold text-lg mb-2">
										{block.title}
									</h3>
									<p className="text-white">{block.description}</p>
								</div>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
