import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Form, Button } from "react-bootstrap";
class SignUp extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            file: '',
            imagePreviewUrl: ''
          };
        this.handleImage=this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let that=this;
        reader.onloadend = () => {
            console.log()
            that.setState({
              file: file,
              imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        var {imagePreviewUrl}=this.state        
        var image=""
        if(imagePreviewUrl){
            image=imagePreviewUrl
        }
        return (
            <div className="d-flex flex-column">
                <Header></Header>
                <div className="div-form ml-2 d-flex flex-column">
                    <h2>Create Account</h2>
                    <div className="foto mb-3 mt-2" style={{backgroundImage: "url("+image+")"}}   >
                        <input id="file" className="custom-file-input" accept="image/*" type="file" onChange={this.handleImage}/>
                    </div>
                    <Form className="ml-1">
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
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column xs="3">
                                Email
                            </Form.Label>
                            <Col xs="8">
                                <Form.Control type="email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextFirst">
                            <Form.Label column xs="3" className="pr-1">First name </Form.Label>
                            <Col xs="8">
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextLast">
                            <Form.Label column xs="3" className="pr-1">
                                Last name
                            </Form.Label>
                            <Col xs="8">
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label column xs="3">State</Form.Label>
                            <Col xs="5">
                                <Form.Control as="select" >
                                    <option>Choose...</option>
                                    <option>Canada</option>
                                    <option>Argentina</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label={
                                <span>I agree to MYtinerary's <a>Terms & Conditions</a></span>
                            } />
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Button variant="primary" type="submit" onClick={this.CreateUser}>
                                Submit
                            </Button>
                        </Row>
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

export default connect()(SignUp);