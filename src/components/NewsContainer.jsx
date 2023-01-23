import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import NewsNavbar from "./NewsNavbar";
import { InfinitySpin } from "react-loader-spinner";
const NewsContainer = (props) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?category=${props.category}`)
			.then((res) => {
				setLoading(false);
				setPosts(res.data.data);
			});
	}, []);

	return (
		<>
			<NewsNavbar />
			{loading ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "20%",
					}}
				>
					<InfinitySpin width="200" color="#000" />{" "}
				</div>
			) : (
				<div className="album py-5 bg-light">
					<div className="container">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
							{posts?.map((props) => (
								<div key={uuidv4()} className="col">
									<div key={props.id} className="card shadow-sm">
										<img src={props.imageUrl} alt="image-card" />
										<div className="card-body">
											<p className="card-text">{props.title}</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<a href={props.url} target="_blank">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary"
														>
															View
														</button>
													</a>
												</div>
												<small className="text-muted">
													Publised At : {props.time}
												</small>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NewsContainer;
