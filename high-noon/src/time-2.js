import React, { Component } from 'react';
import './home.css';
import './later-1.png';

class T2 extends Component {
  render() {
    return (
      <div className="imgbox">
        <a href="/do">
        <img className="center-fit" src={require('./later-3.png')} alt=""/>
        </a>
      </div>
    );
  }
}

export default T2;

