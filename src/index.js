import React from "react";
import dva from "./utils/dva";
import Router from "./routers/index";
import appModel from "./models/index";
export const app = dva({
	initialState: {},
	models: appModel,
	extraReducers: {},

	onAction: [],
	onError(e) {
		console.log("onError", e);
	},
});

//禁止黄色警告框提示
console.disableYellowBox = true;
const App = app.start(<Router />);

export default App;
