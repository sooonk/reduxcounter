import React, {Component} from 'react';
import {connect} from'react-redux';
import {Link} from 'react-router-dom';

import './App.css';


class App extends Component{  
  render() 
    {
    return (
    <div className='App'>
      <div>
      
      <Link to='contact'>Kontakt</Link>
      </div>

      <div>
      <Link to='about'>O nas</Link>
      </div>
      
      
      <p>{this.props.count}</p>
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>    
      );  
    }}
    const mapStateToProps = state => 
    {
      return { count: state };
    };
    const mapDispatchToProps = dispatch => 
    {
      return { 
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}) 
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);





