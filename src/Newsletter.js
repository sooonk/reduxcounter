import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class Newsletter extends Component {
    state = {
        email: ''
    };

    componentDidMount(){
        console.log('mount', this.props)
    }
    componentDidUpdate() {
        console.log('update', this.props)

        return (
        <div className='submitinfo'>
        Zalogowałeś się!
        </div>
        
        )
        
    }
    handleChange = e => {
        this.setState({email: e.target.value});
        
    };
   
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.subscribeNewsletter(this.state.email);            
    }; 
    render() {
        return (
            <div className="newsletter">
                <form onSubmit={this.handleSubmit}>
                <input type='email' placeholder='Wpisz swój adres e-mail' onChange={this.handleChange} />
                <input type="submit" value="Zapisz się" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {email: state.email };
};
const mapDispatchToProps = dispatch => {
    return {
        subscribeNewsletter: (param) => dispatch({
            type: 'ADD_EMAIL', 
            email: param 
        }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);