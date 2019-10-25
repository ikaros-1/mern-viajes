import React,{Component } from 'react';
import {Link} from 'react-router-dom';
import Perfil from './Perfil';
import Menu from './Menu';

export default class Home extends Component{

    render(){
        return(
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-row justify-content-between mr-3 ml-3 mt-3 mb-2">
                  <Perfil></Perfil>
                  <Menu></Menu>
                </div>
                <img className="ml-3 mr-3 w-75 " src="/image/MYtineraryLogo.png"></img>
                <span>Find you perfect trip, designed by insiders who know and love their cities</span>
                <Link to="/cities" ><img src={'/image/circled-right-2.png'} className="wh-40 mb-4" alt=""></img></Link>
            </div>
        );
    }
}