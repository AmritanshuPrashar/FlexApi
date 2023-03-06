import EmailValidator from "./components/EmailValidator";
import NewsApi from "./components/NewsApi";
import RandomMemeGen from "./components/RandomMemeGen";
import SemanticAnalyser from "./components/SemanticAnalyser";
import TranslateText from "./components/TranslateText";
import { Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import NewsContainer from "./components/NewsContainer";
import Weather from "./components/Weather";
import ChatAI from "./components/ChatAi";
function App() {
	return (
		<div className="App items-center">
			<Routes >
				<Route path="/" element={<StartPage />} />
				<Route path="/weather" element={<Weather />} />
				<Route path="/sentiment" element={<SemanticAnalyser />} />
				<Route path='/translate' element={<TranslateText />} />
				<Route path='/memes' element={<RandomMemeGen />} />
				<Route path='/email-val' element={<EmailValidator />} />
				<Route path="/chatai" element={<ChatAI />} />


				<Route path='/news/*' element={<NewsApi />} />
				<Route path='/news/politics' element={<NewsContainer category={'politics'} />}></Route>
				<Route path='/news/technology' element={<NewsContainer category={'technology'} />}></Route>
				<Route path='/news/latest' element={<NewsContainer category={'all'} />}></Route>
				<Route path='/news/business' element={<NewsContainer category={'business'} />}></Route>
				<Route path='/news/science' element={<NewsContainer category={'science'} />}></Route>
				<Route path='/news/sports' element={<NewsContainer category={'sports'} />}></Route>
				<Route path='/news/automobile' element={<NewsContainer category={'automobile'} />}></Route>
				
			</Routes>

		</div>
	);
}

export default App;
