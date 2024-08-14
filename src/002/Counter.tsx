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
				<p class="title">{this.state.title}</p>
				<p class="value">{this.state.value}</p>
				<div class="btn-area">
					<button onClick={this.onClick1}>{this.state.buttonText1}</button>
					&nbsp;&nbsp;
					<button onClick={this.onClick2}>{this.state.buttonText2}</button>
				</div>
			</div>
		)
	}
}

export default Counter;
