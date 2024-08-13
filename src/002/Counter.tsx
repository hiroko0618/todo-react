import React, { Component } from 'react';
import './layout.css'; 
import * as Utils from './utils';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title : Utils.title,
			value : 0,
			buttonText1 : '+',
			buttonText2 : '-'
		};
//		this.onClick1 = this.onClick1.bind(this);
//		this.onClick2 = this.onClick2.bind(this);
	}
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
