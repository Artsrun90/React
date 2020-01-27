import React, {Component} from 'react';

class App extends Component {
    state = {
         pageTitle: <Car/>,
         
    } 
    InputChange  = () => {
        // console.log("change", event.target.value);
        let x =  document.getElementById("newTitle").value
        this.setState( {
                pageTitle: x
            })   
    }
    
    // handleClic  = () => {
     
    //     this.setState({
    //         pageTitle: this.state.pageTitle
    //     })
     
     
    // }
    
    render() {
        return (
        <div>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" id="newTitle"/>
        <button onClick={this.InputChange}>Change Title</button>
        </div>
        );
    }
}
// onChange={this.InputChange}
export default App;