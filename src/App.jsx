import React from "react";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import "./styles.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<div className="row">
					<Header />
					<div className="col-md-12">
						<Pokemon />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
