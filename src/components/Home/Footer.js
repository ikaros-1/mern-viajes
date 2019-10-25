import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url
        };
    }
    render() {
        if (this.url === "/home")
            return (
                <img src={"/image/home.png"} alt="" className="homeimg"></img>
            );
        else
            return (
                <Link to="/"><img src={"/image/home.png"} alt="" className="homeimg"></img></Link>
            );
    }
}

export default Footer;