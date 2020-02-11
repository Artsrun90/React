import React, { Component } from 'react';
import {MyContext} from './App';
class Component2 extends Component {
	render() { 
		return (
		<div style={{
			border:"2px solid brown",
			width:'300px',
			margin: '150px auto',
			padding: "20px",
			textAlign:'center'
		}}>
		<MyContext.Consumer>
			{value => console.log(value)}	
		</MyContext.Consumer>
		</div>
		)
	}
}
 
export default Component2;