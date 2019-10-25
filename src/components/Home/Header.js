import React,{Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';



class Header extends Component{
    render(){
        return(
            <div>
              <div className="d-flex flex-row justify-content-between mr-3 ml-3 mt-3 mb-2">
                <img className="homeimg" src="/image/user.png" alt=""></img>
                <img className="homeimg" src="/image/list.png" alt=""></img>
              </div>
              <img className="w-75 h-25 mt-5 mb-3" src={"/image/MYtineraryLogo.png"} alt=""></img>
              <h5 className="mr-1 ml-1 mb-5 ">Find you perfect trip, designed by insiders who know and love their cities</h5>
            </div>
        );
    }


}

export default Header;