import React, { Component } from 'react';
import './home.css';
import './later-1.png';

class T1 extends Component {
  render() {
    return (
      <div className="imgbox">
        <a href="/time-2">
        <img className="center-fit" src={require('./later-2.png')} alt=""/>
        </a>
      </div>
    );
  }
}

export default T1;

