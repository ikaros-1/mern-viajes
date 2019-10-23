import React, { Component } from 'react'
import home from '../image/home.png'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

class Buttom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url
        };
    }
    render() {
        if (this.url === "/home")
            return (
                <a href=" " disabled><img src={home} alt="" className="homeimg"></img></a>
            );
        else
            return (
                <a href="./home"><img src={home} alt="" className="homeimg"></img></a>
            );
    }
}

export default Buttom;