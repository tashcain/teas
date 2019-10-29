import React, { Component } from 'react';
import Landingimg from './landingimg';
import Carouselcontent from './carcont';
import Carousel from './carousel';
import './comannt.css';
import Teatype from './teatype';
import Footer from './footer';

export default class Home extends Component {
    render() {
        return (
            <div>
            <Landingimg/>
            <div className=" containerfluid landsep">
                hello
            </div>
      <div className='carclass'>
       <div>
       <Carousel/>
       </div>
        

        <div>
        <Carouselcontent/>
        </div>
    </div>
      <Teatype/>
            <Footer/>
            </div>
        )
    }
}
