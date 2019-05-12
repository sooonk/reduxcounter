import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header.js'
import Footer from './Footer.js'


class Contact extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <p>Dane kontaktowe</p>
        <Footer />
      </div>
    );

  }
}
const mapStateToProps = state => {
  return { count: state.count };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);