import React, { Component } from "react";
import "./App.css";

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
        userInput:'',
        list:[]     
  }
}
changeUserInput(input){
  this.setState({
    userInput:input 
  })
}
addToList(input){
  let listArray = this.state.list;

  listArray.push(input);
  
  this.setState({
    list:listArray
  })
}

  render() {
    return (
      <div class="App">
      <input type="text" value={this.state.userInput} 
      onChange={(e)=>this.changeUserInput(e.target.value )}      />
         <button onClick={()=>this.addToList(this.state.userInput)}>press me</button>
    <ul>
      {this.state.list.map( (val)=> <li>{val}</li>)}
    </ul>

    
         </div>
    );
  }
}

export default App;