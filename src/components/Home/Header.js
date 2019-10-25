import React,{Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';



class Header extends Component{
    render(){
        return(
            <div>
            <img className="w-75 h-25 mb-4 mt-5" src={"/image/MYtineraryLogo.png"} alt=""></img>
            <h5 className="mr-3 ml-3 mt-4 mb-5 ">Find you perfect trip, designed by insiders who know and love their cities</h5>
            </div>
        );
    }


}

export default Header;