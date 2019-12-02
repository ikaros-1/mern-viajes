import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import ItemItinerary from "./ItemItinerary"
import { getCity, getItinerary } from "../../actions/itinerariesActions"

class SignUp extends Component {



    render() {

        return (
            <div className="d-flex flex-column">
                <Header></Header>
                <div className="div-form">
                    <h2>Create Account</h2>
                    <div></div>
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
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextFirst">
                            <Form.Label column sm="2">
                                First name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextLast">
                            <Form.Label column sm="2">
                                Last name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label column sm="2">State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Canada</option>
                                <option>Argentina</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label={
                            <span>I agree to MYtinerary's <a >Terms & Conditions</a></span>
                            } />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
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