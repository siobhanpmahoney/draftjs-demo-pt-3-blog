import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import * as Actions from "./actions";

function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk));
}

const store = configureStore();

// const store = createStore(reducers,
//   applyMiddleware(thunk)
// );

store.subscribe(() => {
	store.getState();
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
