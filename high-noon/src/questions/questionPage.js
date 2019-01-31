import React, { Component } from 'react';
import QuestionList from './questionList';
import QUESTIONS from './questions';
import LOCATIONS from './locations';
import {geolocated} from 'react-geolocated';

function radians(degrees){
  var TAU = 2 * Math.PI;
  return degrees * TAU / 360;
}

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = { data: []};
  }
  onSubmitResponse = (question) => {
    var loc = "";
    if(this.props.isGeolocationAvailable && this.props.isGeolocationEnabled){
      var minDist = 999999999999999;
      var R = 6371e3; // metres
      var i;
      for(i = 0; i < LOCATIONS.length; i++){
        var φ1 = radians(this.props.coords.latitude);
        var φ2 = radians(LOCATIONS[i].lat);
        var Δφ = radians(LOCATIONS[i].lat-this.props.coords.latitude);
        var Δλ = radians(LOCATIONS[i].long-this.props.coords.longitude);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        if(d < minDist){
          minDist = d;
          loc = LOCATIONS[i].loc;
        }
      }
      loc = "somewhere near " + loc;
    } else {
      loc = "somewhere";
    }
    console.log(loc);
    console.log(JSON.stringify({question, loc}))
    fetch('https://sometime-soon.com:3001/api/responses', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({question, loc}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error});
      else this.setState({ question: ''});
    });
  }
  render() {
    return (
      <div className="questionBody">
        <div>
          <img src={require('./let.png')} alt="" height="42" width="auto" />
          <QuestionList
            data={QUESTIONS}
            sendResponse={this.onSubmitResponse} />
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(QuestionPage);
