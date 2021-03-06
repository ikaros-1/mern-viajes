import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';


class Gocities extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 align-items-center">
        <Link to="/cities"><img src={'/image/circled-right-2.png'} className="wh-40 mb-2" alt="cities"></img></Link>
      </div>
    );
  }
}

export default Gocities;
