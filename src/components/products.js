import React, { Component } from 'react';
import './comannt.css';
import Footer from './footer';
import { Card, Button } from 'antd';
import Dum from '../images/carimg2.JPG';
import {Link} from 'react-router-dom';
const { Meta } = Card;
export default class Products extends Component {

    // constructor(){
    //   super();
    //   this.state={
    //     cardsize:null
    //   }

    //   this.onhover=this.onhover.bind(this);
    //   this.onleave=this.onleave.bind(this);
    // }

    // onhover(){
    //   this.setState({
    //     cardsize:'cardsize'
    //   })
    // }

    // onleave(){
    //   this.setState({
    //     cardsize:null
    //   })
    // }

    
    
    render() {
        return (
            <div >
                
                <div className="prod">
                <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className='cardsize' alt="example" src={Dum} />}
  >
  <div className='classcont'>
    <Meta title="Tulsi Green Tea" description="click to read about it's benifits" />
    <br/>
    <Link to='/Prod/01'> <Button onClick={this.clickHandler}>click here</Button></Link>
    </div>
  </Card>
  
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className='cardsize'  alt="example" src={Dum} />}
  >
  <div className="classcont">
  <Meta title="Blue Tea" description="click to read about it's benifits" />
    <br/>
    <Link to='/Prod/02'> <Button onClick={this.clickHandler}>click here</Button></Link>
  </div>
    
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className='cardsize'  alt="example" src={Dum} />}
  >
  <div className="classcont">
  <Meta title="Blue Tea" description="click to read about it's benifits" />
    <br/>
    <Link to='/Prod/02'> <Button onClick={this.clickHandler}>click here</Button></Link>
  </div>
    
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className='cardsize'  alt="example" src={Dum} />}
  >
  <div className="classcont">
  <Meta title="Blue Tea" description="click to read about it's benifits" />
    <br/>
    <Link to='/Prod/02'> <Button onClick={this.clickHandler}>click here</Button></Link>
  </div>
    
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Dum} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Dum} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
                </div>
                <Footer/>
                
            </div>
        )
    }
}
