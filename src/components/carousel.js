import React, { Component } from 'react';
import carimg1 from '../images/carimg1.JPG';
import carimg2 from '../images/carimg2.JPG';
import carimg3 from '../images/carimg3.JPG';
import '../App.css';


export default class Carousel extends Component {
    render() {
        return (
            <div className="cardiv">
            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100"  src={carimg1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"   src={carimg2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"  src={carimg3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
            </div>
        )
    }
}
