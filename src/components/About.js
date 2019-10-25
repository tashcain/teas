import React, { Component } from 'react';
import Footer from './footer';
import './comannt.css';
import Abimage from '../images/carimg3.JPG';
import Gimage from '../images/girl.jpg';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="aboutus">
                    <div className='aboutus01'>
                    <h2>AboutUs</h2>
                    <div className="about_quote">
                         <h4>"You Can't Buy Happiness But You Can Buy Tea And That's Kind Of The Same Thing"</h4>
                    </div>
                    <div className="about_since">
                        <div style={{background:'none'}}>
                            <div className="about_since01">
                            <h2>Journey so far</h2>
                            <h4>LMAssamTea was founded in 2013 <br/> by Tea Sommelier Matrika to source <br/> teas direct from farmers and craft them into unique blends.</h4>
                            </div>
                            </div>
                        <div style={{background:'none'}}>
                            <img src={Abimage}  alt=""/>
                        </div>
                    </div>
                    <div className="about_cards">
                        <div className="about_card01" >
                            <span style={{fontFamily:'Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace', fontSize:'60px'}}>1 </span>
                            <h5 style={{textAlign:'center', padding:'5%'}}>We take pride in our sourcing. We buy harvests from farmers, not commodities from brokers</h5>
                            </div>
                        <div className="about_card01" >
                        <span style={{fontFamily:'Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace', fontSize:'60px'}}>2 </span>
                            <h5 style={{textAlign:'center', padding:'5%'}}>Our teas are crafted in small batches - We never compromise on freshness.</h5>
                            
                        </div>
                        <div className="about_card01" >
                        <span style={{fontFamily:'Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace', fontSize:'60px'}}>3 </span>
                            <h5 style={{textAlign:'center', padding:'5%'}}>We never choose flavour over health - 100% natural ingredients alwayss</h5>
                            
                        </div>
                        <div className="about_card01" >
                        <span style={{fontFamily:'Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace', fontSize:'60px'}}>4 </span>
                            <h5 style={{textAlign:'center', padding:'5%'}}>When you call us, you’re talking to another tea lover, not a recorded message.</h5>
                            
                        </div>
                    </div>
                    <div className="about_own">
                        <div style={{background:'none'}}>
                            <div className="about_own01">
                            <h2>The Owner Says</h2>
                            <p>LMAssamTea have the best quality product of India’s famous tea garden for tea lovers. We have various type of production in tea are Green tea, Black tea, Blue tea in all flavor as well as  CTC breakfast tea. We are thankful to our customer who trust  us and encourage us to do more work and appreciate for our products and trust in our Brand.Our goal is to ensure the customer’s satisfaction; we rely on it to help develop the vision and set the roadmap for the future of our business.</p>
                            </div>
                            </div>
                        <div style={{background:'none'}}>
                            <img src={Gimage}   alt=""/>
                        </div>
                    </div>
                    <div className="about_own02">
                        <p>We believe that the India is the best in the world for tea production and we all know about Assam tea. It creates world record for the tea Production. We believe in fresh, pure tea that is healthy and great in taste, we have faith in exceptional, exciting products;  delighting our consumers.
                    </p>
                    </div>
                    </div>
                    
                    
                </div>
                <Footer/>
            </div>
        )
    }
}
