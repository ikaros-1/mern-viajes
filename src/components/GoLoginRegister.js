import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

class Go extends Component {
    render() {
        return (
        <div>
            <h5 className="mb-3">Want to build your own MYtinerary</h5>
            <div className="ml-4 d-flex flex-row justify-content-between w-75 mb-4">
                <a href="#">Log in</a>
                <a href="#">Create Account</a>
            </div>
        </div>
        );
    }
}

export default Go;
