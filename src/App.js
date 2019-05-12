import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import Footer from './Footer.js'
import Newsletter from './Newsletter.js'


import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='counter'>
          <p>{this.props.count}</p>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>

        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, nisi ut condimentum malesuada, magna libero ultricies mi, nec sollicitudin est magna at est. Integer dui orci, finibus eu nunc vel, suscipit aliquet urna. Phasellus efficitur massa sit amet nulla ullamcorper, vitae fringilla sapien varius. Donec nec vestibulum neque. Sed eleifend, ipsum ut gravida venenatis, urna enim sodales mi, ut viverra odio nulla nec orci. Sed ornare tincidunt odio eu ultricies. Phasellus pharetra eros vitae consequat lobortis. Suspendisse id pulvinar ante. Curabitur vehicula turpis vitae posuere placerat. Maecenas fermentum eros erat, et auctor nulla malesuada sit amet. Praesent felis lectus, vehicula ut nulla vel, rhoncus tempor metus. Phasellus sollicitudin leo sed lorem egestas congue. Duis finibus, nulla in sagittis rutrum, nisl nunc eleifend sem, a gravida diam massa sit amet mi. Duis arcu eros, aliquet in vehicula sed, vestibulum ut metus. Donec nisi sapien, ullamcorper a augue nec, vestibulum sollicitudin odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, nisi ut condimentum malesuada, magna libero ultricies mi, nec sollicitudin est magna at est. Integer dui orci, finibus eu nunc vel, suscipit aliquet urna. Phasellus efficitur massa sit amet nulla ullamcorper, vitae fringilla sapien varius. Donec nec vestibulum neque. Sed eleifend, ipsum ut gravida venenatis, urna enim sodales mi, ut viverra odio nulla nec orci. Sed ornare tincidunt odio eu ultricies. Phasellus pharetra eros vitae consequat lobortis. Suspendisse id pulvinar ante. Curabitur vehicula turpis vitae posuere placerat. Maecenas fermentum eros erat, et auctor nulla malesuada sit amet. Praesent felis lectus, vehicula ut nulla vel, rhoncus tempor metus. Phasellus sollicitudin leo sed lorem egestas congue. Duis finibus, nulla in sagittis rutrum, nisl nunc eleifend sem, a gravida diam massa sit amet mi. Duis arcu eros, aliquet in vehicula sed, vestibulum ut metus. Donec nisi sapien, ullamcorper a augue nec, vestibulum sollicitudin odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, nisi ut condimentum malesuada, magna libero ultricies mi, nec sollicitudin est magna at est. Integer dui orci, finibus eu nunc vel, suscipit aliquet urna. Phasellus efficitur massa sit amet nulla ullamcorper, vitae fringilla sapien varius. Donec nec vestibulum neque. Sed eleifend, ipsum ut gravida venenatis, urna enim sodales mi, ut viverra odio nulla nec orci. Sed ornare tincidunt odio eu ultricies. Phasellus pharetra eros vitae consequat lobortis. Suspendisse id pulvinar ante. Curabitur vehicula turpis vitae posuere placerat. Maecenas fermentum eros erat, et auctor nulla malesuada sit amet. Praesent felis lectus, vehicula ut nulla vel, rhoncus tempor metus. Phasellus sollicitudin leo sed lorem egestas congue. Duis finibus, nulla in sagittis rutrum, nisl nunc eleifend sem, a gravida diam massa sit amet mi. Duis arcu eros, aliquet in vehicula sed, vestibulum ut metus. Donec nisi sapien, ullamcorper a augue nec, vestibulum sollicitudin odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, nisi ut condimentum malesuada, magna libero ultricies mi, nec sollicitudin est magna at est. Integer dui orci, finibus eu nunc vel, suscipit aliquet urna. Phasellus efficitur massa sit amet nulla ullamcorper, vitae fringilla sapien varius. Donec nec vestibulum neque. Sed eleifend, ipsum ut gravida venenatis, urna enim sodales mi, ut viverra odio nulla nec orci. Sed ornare tincidunt odio eu ultricies. Phasellus pharetra eros vitae consequat lobortis. Suspendisse id pulvinar ante. Curabitur vehicula turpis vitae posuere placerat. Maecenas fermentum eros erat, et auctor nulla malesuada sit amet. Praesent felis lectus, vehicula ut nulla vel, rhoncus tempor metus. Phasellus sollicitudin leo sed lorem egestas congue. Duis finibus, nulla in sagittis rutrum, nisl nunc eleifend sem, a gravida diam massa sit amet mi. Duis arcu eros, aliquet in vehicula sed, vestibulum ut metus. Donec nisi sapien, ullamcorper a augue nec, vestibulum sollicitudin odio.

        </div>
        <div className='newsletter'>
        <Newsletter />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);





