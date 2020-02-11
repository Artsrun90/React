import React, {Component} from 'react';
import Todolisttest from './todolisttest';

class Todotest extends Component {
       constructor(props){
           super(props);
           this.state = {
               items: [],
               text: ""
           }
           this.handleClick = this.handleClick.bind(this)
           this.handleSubmit = this.handleSubmit.bind(this)
       }

       render(){
        const mystyle = {
            color: "black",
            padding: "10px",
            fontFamily: "Arial"
          };
          const butt = {
            backgroundColor: "#4CAF50",
            padding: "12px 26px",
            borderRadius: "4px",
            color: "white"
          }
           return(
               <div style={{backgroundColor: "#f2f2f2"}}>
                   <h1>Work list</h1>
                   <Todolisttest items = {this.state.items}/>
                   <form onSubmit={this.handleSubmit}>
                       <label>Wath is need to do?</label>
                       <input  style={mystyle} type="text"
                       value = {this.state.text} 
                       onChange = {this.handleClick}
                       />
       <button style={butt}>Add#{this.state.items.length + 1}</button>
                   </form>
               </div>
           )
       }

       handleClick(e){
           this.setState({
               text: e.target.value
           })
       }

       handleSubmit(e){
           e.preventDefault();
           if(!this.state.text.length){
               return;
           }
           const newtext = [{
                   text: this.state.text,
                   id: new Date()
                }]

           this.setState({
               items: this.state.items.concat(newtext),
               text: ""
           })

       }

}

export default Todotest;