import React, { Component } from 'react';
import { Icon, Input} from 'antd';


const { Search } = Input;


export default class Footer extends Component {
    render() {
        return (
            <div>
                
      <div className="footer">
        <div className="about">
          <div className="aboutcont">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam voluptatibus. Id tempora dolores quas nemo ratione voluptates! Amet, asperiores.</p>
          </div>
        </div>
        <div className="about">
          <div className="aboutcont">
            <h4>Newsletter</h4>
            <div className="search">
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            </div>
          </div>
        </div>
        <div className="about">
          <div className="aboutcont">
            <h4>Follow Us</h4>
            <p>Let us be social</p>
            <div className='icon'>
            <Icon type="google" />
            <Icon type="facebook" theme="filled" />
            <Icon type="instagram" />
            </div>
            
          </div>
        </div>
      </div>
            </div>
        )
    }
}
