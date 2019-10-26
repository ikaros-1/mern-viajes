import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Popover,OverlayTrigger} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';



class Header extends Component{
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
              <div className="d-flex flex-row justify-content-between mr-3 ml-3 mt-3 mb-4">
                <OverlayTrigger trigger="click" placement="buttom" overlay={popover}>
                  <img className="homeimg" src="/image/user.png" alt=""></img>
                </OverlayTrigger>
                <img className="homeimg" src="/image/list.png" alt=""></img>
              </div>
              <img className="w-75 h-25 mb-3" src={"/image/MYtineraryLogo.png"} alt=""></img>
              <h5 className="mr-1 ml-1 mb-3 ">Find you perfect trip, designed by insiders who know and love their cities</h5>
            </div>
        );
    }


}

export default Header;