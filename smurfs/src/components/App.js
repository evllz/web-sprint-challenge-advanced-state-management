import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Form';
import { loadData } from '../actions/index';
import Display from '../components/Display';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.loadData();
	}
	render() {
		return (
			<div className='App'>
				<h1>SMURFS! W/Redux</h1>
				<div>Welcome to your state management version of Smurfs!</div>
				<Form />
				<Display />
			</div>
		);
	}
}

export default connect(null, { loadData })(App);
