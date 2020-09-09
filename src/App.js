import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recovered: 0,
			deaths: 0,
			active: 0,
			cases: 0,
		};
	}

	componentDidMount() {
		axios.get("https://corona.lmao.ninja/v2/countries/gh").then((response) =>
			this.setState({
				recovered: response.data.recovered,
				deaths: response.data.deaths,
				active: response.data.active,
				cases: response.data.cases,
			})
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="mt-5 container">
						<p>Ghana's Covid-19 Cases by Nasaal Lawrencia</p>
						<div className="row cards-row">
							<div className="col-md-6">
								<div className="case rounded bg-success text-white p-5 recovered-case">
									Recovered
									<h1 id="recovered">{this.state.recovered}</h1>
								</div>
							</div>
							<div className="col-md-6">
								<div className="case rounded bg-primary text-white p-5">
									Cases
									<h2>{this.state.cases}</h2>
								</div>
								<div className="case rounded bg-dark text-white p-5 my-1">
									Deaths
									<h2>{this.state.deaths}</h2>
								</div>
								<div className="case rounded bg-danger text-white p-5 my-1">
									Active
									<h2>{this.state.active}</h2>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
