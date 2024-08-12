import React from 'react';
import './HelloWorld.css'; 

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
	}	
	render() {
		return (
			<div class="container">
				<p>Hello World!</p>
			</div>
		)
	}
}

export default HelloWorld;
