import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    //  method 1(without JSX)
    // return (
    //   //  important attribute is className  and htmlFor "for"
    //   <div className="App">
    //     <h1> Hello from React</h1>
    //   </div>
    // );

    //    method 2(using JXS)
        return React.createElement('div', { className: 'App'},
            React.createElement('h1', null, 'Hello From React'));

  //      both methods are same but the way of writing code is different
  }
}

export default App;
