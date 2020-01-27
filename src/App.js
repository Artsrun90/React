import React, {Component} from 'react';
import Car from './Car';
import Carone from './Car_one';

class App extends Component {
  state = {
    cars: [
         <Car />,
         <Carone />
    ]
  }
   render() {
     return(
     <div>
       {
         this.state.cars.map((item) =>
         <div>{item}</div>
         )
       }
     </div>
     )
     }
}

export default App;
