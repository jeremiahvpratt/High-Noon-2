import React, { Component } from 'react';
import './later-1.png';

class Home extends Component {
  render() {
    return (
      <div className="imgbox">
        <a href="/time-1">
        <img className="center-fit" src={require('./later-1.png')} alt=""/>
        </a>
      </div>
    );
  }
}

export default Home;

