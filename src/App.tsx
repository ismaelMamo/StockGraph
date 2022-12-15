import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import { initialFetch, zoomInModifier, setUserInput } from "./app/dataPoint";
import "./App.css";

function App() {
	const { value } = useSelector((state: any) => state.dataPoints);
	const dispatch = useDispatch();

	const fetchDataPoints = async (_ticket: string, _time: string) => {
		const key = "EJBD13XYSL4HQM11";
		let ticket = _ticket;
		let time = _time;
		const queryUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticket}&interval=${time}&apikey=${key}`;
		await fetch(queryUrl)
			.then((res) => res.json())
			.then((data) => {
				console.log(data["Time Series (5min)"]);
			});
	};

	return (
		<div className='App'>
			<input
				onChange={(element) => {
					// setUserInput(element.target.value.trim());
				}}
				placeholder='Enter ticket...'
				type='search'
				id='SearchField'
			/>
			<div>Stockgraph</div>
			{/* store.dispatch(initialFetch()) */}
			<button onClick={() => fetchDataPoints("IBM", "5min")}>Fetch</button>
		</div>
	);
}

export default App;
