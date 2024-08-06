import logo from "./logo.svg";
import "./App.css";
import Features from "./components/featuresSection";

function App() {
	return (
		<div className="app">
			<div className="logo-section">
				<span className="logo">MKG Group</span>
			</div>
			<Features />
			<div className="disclamer-section">
				<p>
					Note: This is a temporary website. Our current website is down due to
					maintenance reasons.
				</p>
			</div>
		</div>
	);
}

export default App;
