import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";

export default class Perfil extends Component{

  render(){
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          <div className="d-flex flex-column">
            <Link><span>Create account</span></Link>
            <Link><span>Log in</span></Link>
          </div>
        </Popover.Content>
      </Popover>
    );


    return(
      <div>
        <OverlayTrigger trigger="click" placement="buttom" overlay={popover}>
          <img className="perfil" src="/image/user.png" alt=""></img>
        </OverlayTrigger>
      </div>
    );
  }
}