import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class About extends Component {
    render() {
        return (
            <div className="App">

                <Link to='/'>Home</Link>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>

                <p>ABOUT</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);