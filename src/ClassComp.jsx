import React, {Component} from "react";

export default class ClassComp extends Component{
constructor(props){
    super(props);
    this.state={count:0};
}

handleIncrement= () => {
    this.setState((prevstate)=>({count: prevstate.count+1}));
}

handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count-1}));
}

    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <h4>Count: {this.state.count}</h4>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}