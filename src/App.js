import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/UserItem";

class App extends Component {
  render() {
    //creating variables

    // const name = 'Binjita Kandel Baral';
    // const loading = true;

    //  method 1(without JSX)
    return (
      <div className="App">
        <Navbar/>
        <Users/>
        {/*<h1> Hello from React</h1>*/}
        {/*{loading ? <h4>LOading----</h4> : <h2> Hello {name.toUpperCase()} {1+4}</h2>}*/}

      </div>
    );

    //    method 2(using JXS)
    //     return React.createElement('div', { className: 'App'},
    //         React.createElement('h1', null, 'Hello From React'));

  //      both methods are same but the way of writing code is different
  }
}

export default App;
