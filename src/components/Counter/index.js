import React, { Component } from 'react';
import './style.scss';
import Child from '../Child'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
      name: 'Vasa'
    }
  }

  changeCounter = () => {
    this.setState({
      counterValue: this.state.counterValue + 1
    })
  }

  render () {
    console.log('Render counter');
    const isShowChild = this.state.counterValue > 10;
    return (
      <div className="header">
        <input 
          type="button" 
          value="Click me" 
          onClick={this.changeCounter}
          />
        <h1>{this.state.counterValue}</h1>
        {isShowChild ? <Child /> : ''}

      </div>
    );
  }

  
}

export default Counter;

