import React, {Component} from 'react';
import HeaderOffer from './HeaderOffer'
import Illustrations from './Illustrations'
import Video from './Video'
import Footer from './Footer'
import Advantages from './Advantages'
import './style.css';
import './adaptive-style.css'

class App extends Component {
  render() {
    return(
      <div>
        <HeaderOffer/>
        <Illustrations/>
        <Video/>
        <Advantages/>
        <Footer/>
      </div>
    );
  }
}

export default App;
