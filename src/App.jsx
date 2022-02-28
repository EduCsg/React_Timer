import { useEffect, useState } from "react";
import "./styles.css";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 60 * 25; //25 minutes

function App() {
	const [secondsAmount, setSecondsAmount] = useState(
		COUNTDOWN_INITIAL_TIME_IN_SECONDS,
	);

	const minutes = Math.floor(secondsAmount / 60);
	const seconds = Math.floor(secondsAmount % 60);

	useEffect(() => {
		if (secondsAmount > 0) {
			setTimeout(() => {
				setSecondsAmount((state) => state - 1);
			}, 1000);
		} else {
			alert("Chegou ao fim!");
		}
	}, [secondsAmount]);

	return (
		<div className="div-container">
			<h1 className="main-title">Timer Counter</h1>
			<div className="span-wrapper">
				<span className="span-1">{String(minutes).padStart(2, "0")}</span>
				<span className="span-2">:</span>
				<span className="span-3">{String(seconds).padStart(2, "0")}</span>
			</div>
		</div>
	);
}

export default App;
