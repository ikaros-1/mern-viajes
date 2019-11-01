import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

class GoLoginRegister extends Component {
    render() {
        return (
        <div>
            <h5 className="mb-4 mt-2">Want to build your own MYtinerary</h5>
            <div className="ml-4 d-flex flex-row justify-content-between w-75 mb-5">
                <Link to="/login"><span className="link">Log in</span></Link>
                <Link to="/register"><span className="link">Create Account</span></Link>
            </div>
        </div>
        );
    }
}

export default GoLoginRegister;
