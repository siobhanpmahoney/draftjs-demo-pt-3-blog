import React, { Component } from "react";
import "./App.css";
import PageContainer from "./components/PageContainer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../src/actions";

class App extends Component {
	componentDidMount() {
		this.props.loadNote();
	}

	render() {
		return (
			<div className="App">
				<PageContainer />
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		note: state.displayedNote
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
