import React,{Component} from 'react'
import imgtittle from '../image/MYtineraryLogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';



class Home extends Component{
    render(){
        return(
            <div>
            <img className="w-75 h-25 mb-4 mt-4" src={imgtittle} alt=""></img>
            <h5 className="m-3 mt-4 mb-5 ">Find you perfect trip, designed by insiders who know and love their cities</h5>
            </div>
        );
    }


}

export default Home;