import React,{Component} from 'react';
import Header from './Header';
import Fotter from './Buttom-home';
import Gocities from './Buttom-cities'
import GoLoginRegister from './GoLoginRegister'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component{


    render(){
        return(
            <div className="App d-flex flex-column w-100 align-items-center">
                <Header></Header>
                <Gocities></Gocities>
                <GoLoginRegister></GoLoginRegister>
                <Fotter className="mt-2" url="/home"></Fotter>
            </div>
        );
    }
}