import React, { Component } from 'react';
import './layout.css'; 
import * as Utils from './utils';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title : Utils.title,
			value : 2147483647,
			buttonText1 : '+',
			buttonText2 : '-'
		};
	}
	onClick1 = () => {
    this.setState({ value: Utils.add(this.state.value) });
  };
	onClick2 = () => {
		this.setState({ value: Utils.sub(this.state.value) });
	};
	render() {
		return (
			<div class="container">
				<p>{this.state.title}</p>
				<p>{this.state.value}</p>
				<button onClick={this.onClick1}>{this.state.buttonText1}</button>
				<button onClick={this.onClick2}>{this.state.buttonText2}</button>
			</div>
		)
	}
}

export default Counter;
