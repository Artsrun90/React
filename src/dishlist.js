import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dishlist extends Component {
    render(){
        return(    
            // <div>    
            //     {this.props.nameigredients.map((item, index) =>(
            //         <ol>
            //      <h1>{item.name}</h1>
            //      {item.ingredients.map(item =>(
            //             <li key="foo">{item}</li>
            //      ))}
            //      <button key={index} onClick={this.props.onDelete}>Delete</button>  
            //      </ol>
            //      ))}
                      
            // </div> 
            <div>                
                 <h1>Name: {this.props.dishname}</h1>
                 <ul>
                 {this.props.ingredientValue.map(item =>
                          <li>{item}</li>
                     )}
                 </ul>                                     
                 <button onClick={this.props.onDelete}>Delete</button>      
            </div> 
        )
    }
}

Dishlist.propTypes = {
dishname: PropTypes.string,
ingredientValue: PropTypes.arrayOf(PropTypes.string),
onDelete: PropTypes.func
}

export default Dishlist;