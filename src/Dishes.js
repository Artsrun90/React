import React, {Component} from 'react';
import Dishlist from './dishlist';

class Dishes extends Component {
       constructor(props){
           super(props);
           this.state = {
               chasatesak: [
                { name: "Peperony", ingredients: ['Artichokes', 'greens','Asparagus', 'Beans']},
                { name: "Lasagna", ingredients: ['Broccoli', 'Brussels sprouts','Capsicums', 'Carrots']},
                { name: "udon", ingredients: ['Celeriac', 'Celery','Chilli peppers', 'Chokos']},
                { name: "onigir", ingredients: ['Cucumber', 'Eggplant','Fennel', 'Garlic']},
                { name: "nachos", ingredients: ['Ginger', 'Kohlrabi','Kūmara', 'Leeks']}
              ]
           }
        }
        
        deleteComponent(index){
            const dishes = this.state.chasatesak.concat();
            dishes.splice(index, 1);
            this.setState({
                chasatesak: dishes
            })
        }

        render(){
            return(
                // <div>
                //       <Dishlist nameigredients={this.state.chasatesak}/>
                // </div>
                <div>
                    { this.state.chasatesak.map((dish, index) => (
                    <Dishlist                    
                    dishname={dish.name}
                    ingredientValue= {dish.ingredients}
                    onDelete = {this.deleteComponent.bind(this, index)}
                    />
                ))
                    }   
                                      
                </div>
            )
        }

    }
    export default Dishes;