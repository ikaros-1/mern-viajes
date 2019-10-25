import React,{Component } from 'react';

export default class Home extends Component{

    render(){
        return(
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between"></div>
                <img src="/image/MYtin_LandingPage.png"></img>
                <span>Find you perfect trip, designed by insiders who know and love their cities</span>
                <Link to="/cities" ><img src={'/image/circled-right-2.png'} className="wh-40 mb-4" alt=""></img></Link>
            </div>
        );
    }
}