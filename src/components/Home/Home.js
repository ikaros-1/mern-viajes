import React,{Component} from 'react';
import Header from './Header';
import Fotter from './Footer';
import Gocities from './Buttom-cities'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component{


    render(){
        return(
            <div className="App d-flex flex-column w-100 align-items-center container">
                <Header></Header>
                <Gocities></Gocities>
                
                <Fotter className="mt-2" url="/home"></Fotter>
            </div>
        );
    }
}