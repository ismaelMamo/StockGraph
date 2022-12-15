import { configureStore, ThunkAction, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type point = {
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
};

export interface Points {
	dataPoints: string[];
	displayDataPoints: string[];
	ticket: string;
}

const initialState: Points = {
	dataPoints: [],
	displayDataPoints: [],
	ticket: "",
};
export const dataPointsSlice = createSlice({
	name: "dataPoints",
	initialState: {
		dataPoints: [],
		ticket: ".SPX",
	},
	reducers: {
		initialFetch: (state: any) => {
			console.log("initialFetch");
		},
		zoomInModifier: (state: any, action: any) => {
			console.log("zoomInModifier");
		},
		setUserInput: (state: any) => {
			console.log("setUserInput");
		},
	},
});
export const { initialFetch, zoomInModifier, setUserInput } =
	dataPointsSlice.actions;
export default dataPointsSlice.reducer;
