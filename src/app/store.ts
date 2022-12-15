import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataReducer from "./dataPoint";

export const store = configureStore({
	reducer: {
		dataPoints: dataReducer,
	},
});
