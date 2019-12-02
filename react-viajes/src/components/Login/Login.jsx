import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import './node_modules/bootstrap/dist/css/bootstrap.css';
import ItemItinerary from "./ItemItinerary"
import { getCity, getItinerary } from "../../actions/itinerariesActions"

class Login extends Component {



    render() {

        return (
            <div className="d-flex flex-column">
                <Header></Header>
                <div className="div-form">
                    <h2>Login</h2>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextUser">
                            <Form.Label column sm="2">
                                Username
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" />
                            </Col>
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Ok
                        </Button>
                    </Form>
                    <div className="d-flex flex-row box-red m-2">
                        <img src="" alt=""></img>
                        <div>Log in with Google</div>
                    </div>
                    <div className="d-flex flex-row box-red m-2">
                        <img src="" alt=""></img>
                        <div>Log in with Facebook</div>
                    </div>

                    <span>Don't have a MYtinerary account yet?</span>
                    <span>You should create one! It's totally free and only takes a minute.</span>

                    <Link><h2>Create Account</h2></Link>


                </div>
                <div className="d-flex justify-content-around foot flex-row mb-1">
                    <img className="homeimg" src="/image/arrow-back.png" onClick={this.props.history.goBack} alt=""></img>
                    <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" alt=""></img></Link>
                    <img className="homeimg" alt=""></img>
                </div>
            </div>
        )
    }
}

export default connect(Login);