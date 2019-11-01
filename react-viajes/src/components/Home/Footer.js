import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';


class Footer extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      direction: 0
    }
  }
  cambiarIndex(index) {
    if (index < 0)
      this.setState({ index: 3 })
    if (index > 3)
      this.setState({ index: 0 })
    this.setState({ index: index });
  }
  cambiarDireccion(directions) {
    this.setState({ direction: directions });
  }

  render() {
    var cities=['5d6f4a3c82f7f.jpg','Chicago-USA.jpg','descarga.jpg','Hyderabad.jpg','inglaterra.jpg','London-.jpg','Los-Angeles-USA.jpg','lwx_singapore_skyline_100519_10.jpg','Moscow-Russia.jpg','New-York-USA.jpg','Osaka-Japan.jpg','Paris-France.jpg','paris.jpg','seoul.jpg','Seoul-South-Korea.jpg','Shanghai-China-Top-Famous-Richest-Cities-in-The-World-2017.jpg','Tokyo-Japan-Top-Most-Popular-Richest-Cities-in-The-World-2018.jpg']
    
    var items=()=>{
      var carousel=[]
        for(var i=0;i<4;i++){
        carousel.push(<Carousel.Item key={i}>
        <div  className="d-flex flex-column p-2">
          <div className="w-100 pb-2">
          <img className="w-50 pr-2 imageCarrousel" src={"./image/"+cities[i*4]} alt={cities[(i*4)]}></img>
          <img className="w-50 pl-2 imageCarrousel" src={"./image/"+cities[(i*4)+1]} alt={cities[(i*4)+1]}></img>
          </div>
          <div className="w-100 pt-2">
          <img className="w-50 pr-2 imageCarrousel" src={"./image/"+cities[(i*4)+2]} alt={cities[(i*4)+2]}></img>
          <img className="w-50 pl-2 imageCarrousel" src={"./image/"+cities[(i*4)+3]} alt={cities[(i*4)+3]}></img>
          </div>
        </div>
        </Carousel.Item>)
        }
      return carousel;
    }
  
    
    return (
      <div className="w-100">
        <span>Popular MYtineraries</span>
        <Carousel>
          {items()}
        </Carousel>
        
      </div>
    );
  }

}

export default Footer;
/*{
class IndicadorCarrousel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const Indicador = () => {
      var Indicador = "";
      for (var i = 0; i < 4; i++) {
        if (i == this.props.index) {
          Indicador += <img src="/image/black-circle.png"></img>
        }
        else {
          Indicador += <img src="/image/white-circle.png" onClick={this.props.cambiarIndex(i)}></img>
        }
      }
      return Indicador
    }
    return (
      <div className="d-flex flex-row justify-content-around mr-3 ml-3">
        <img className="homeimg" src="/image/arrow-back.png" onClick={Carousel.handlePrev}></img>
        {Indicador}
        <img className="homeimg" src="/image/next-arrow.png" onClick={Carousel.handleNext}></img>
      </div>
    )
  }
}}*/