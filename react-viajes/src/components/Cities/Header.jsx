import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Popover,OverlayTrigger} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Cities.css';



class Header extends Component{
    render(){
      const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <div className="d-flex flex-column">
              <Link to="/register"><span>Create account</span></Link>
              <Link to="/login"><span>Log in</span></Link>
            </div>
          </Popover.Content>
        </Popover>
      );

        return(
            <div>
              <div className="d-flex flex-row justify-content-between mr-3 ml-3 mt-3 mb-4">
                <OverlayTrigger trigger="click" placement="bottom-start" overlay={popover}>
                  <img className="homeimg" src="/image/user.png" alt=""></img>
                </OverlayTrigger>
                <img className="homeimg" src="/image/list.png" alt=""></img>
              </div>
            </div>
        );
    }


}

export default Header;