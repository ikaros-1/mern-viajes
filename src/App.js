import React, { Component } from 'react';
import Header from './components/Header';
import Fotter from './components/Buttom-home';
import Gocities from './components/Buttom-cities'
import Link from './components/GoLoginRegister'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column m-2 w-100 align-items-center">
        <Header></Header>
        <Gocities></Gocities>
        <Link></Link>
        <Fotter className="mt-2" url="/home"></Fotter>
      </div>
    );
  }
}

export default App;
