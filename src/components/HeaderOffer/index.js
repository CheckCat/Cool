import React, {Component} from 'react';
import Header from './Header'
import Offer from './Offer'
import './style.css';

class HeaderOffer extends Component {
  render() {
    return(
      <div className='background-header-offer'>
        <div className='container'>
          <Header/>
          <Offer/>
        </div>
      </div>
    );
  }
}

export default HeaderOffer;
