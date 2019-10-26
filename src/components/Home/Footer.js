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
    return (
      <div className="bg-secondary w-100">
        <span>Popular MYtineraries</span>
        <Carousel >
          <Carousel.Item>
            <div>
              hola
          </div>
            
          </Carousel.Item>
          <Carousel.Item>
            <div>
              adios
          </div>
            
          </Carousel.Item>
          <Carousel.Item>
            <div>
              chau
          </div>
            
          </Carousel.Item>
          <Carousel.Item>
            <div>
              chau
          </div>
            
          </Carousel.Item>
        </Carousel>
        {//<IndicadorCarrousel cambiarIndex={this.cambiarIndex.bind(this)} cambiarDireccion={this.cambiarDireccion.bind(this)} index={this.state.index}></IndicadorCarrousel>
        }
      </div>
    );
  }

}

export default Footer;

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
}