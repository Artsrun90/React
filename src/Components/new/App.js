import React, { Component } from 'react';
import RContext from './R_Context';

export const MyContext = React.createContext(25);
MyContext.displayName = 'MyDisplayName';

class App extends Component {
		constructor(props){
			super(props);
			this.state ={
				stateValue: false,
			}
		}
	render() {
		return (
		<div>
				{/*սա պետքա ամբողջովին հանես, որ defaultValue-ն աշխատի այսինքն տպի 25  */}
			{/* <MyContext.Provider value> */}
            <RContext name="dsfsd"/>
			{/* </MyContext.Provider> */}
        </div>
		);
	}
}

export default App;