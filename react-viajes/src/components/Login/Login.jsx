import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Form, Button } from "react-bootstrap";
class Login extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <Header></Header>
                <div className="div-form d-flex flex-column mr-2 ml-2">
                    <h2>Login</h2>
                    {<Form className="m-2">
                        <Form.Group as={Row} controlId="formPlaintextUser">
                            <Form.Label column xs="3">
                                Username
                            </Form.Label>
                            <Col xs="8">
                                <Form.Control />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column xs="3">
                                Password
                            </Form.Label>
                            <Col xs="8">
                                <Form.Control type="password" />
                            </Col>
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Button variant="primary" type="submit">
                                Ok
                            </Button>
                        </Row>
                    </Form>}
                    <div className="d-flex flex-row box-red m-2 align-self-end mr-4">
                        <img src="" alt=""></img>
                        <div>Log in with Google</div>
                    </div>
                    <div className="d-flex flex-row box-red m-2 align-self-end mr-4">
                        <img src="" alt=""></img>
                        <div>Log in with Facebook</div>
                    </div>

                    <span className="ml-2">Don't have a MYtinerary account yet?</span>
                    <span className="ml-2">You should create one! It's totally free and only takes a minute.</span>

                    <Link to="/register" className="align-self-center"><h2>Create Account</h2></Link>


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


export default connect()(Login);