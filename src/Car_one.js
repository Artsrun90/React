import React, {Component} from 'react';

class App extends Component {
    state = {
         name: "BMW"
    }    
    
    render() {
        return (
        <div>
        <h1>{this.state.name}</h1>
        </div>
        );
    }
}
export default App;