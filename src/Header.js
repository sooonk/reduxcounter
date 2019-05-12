import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return <div className='header'>
                    <h1>Hello World!</h1>
                    <Link to='/'>Home</Link>
                    <Link to='contact'>Kontakt</Link>
                    <Link to='about'>About</Link>
                </div>
        
    }
  }


export default Header;  