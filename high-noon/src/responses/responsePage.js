import React, { Component } from 'react';
import 'whatwg-fetch';
import ResponseList from './responseList';

class ResponsePage extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      error: null,
      question: ''
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadResponsesFromServer();
    if( !this.pollInterval){
      this.pollInterval = setInterval(this.loadResponsesFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadResponsesFromServer = () => {

    fetch('http://localhost:3001/api/responses', {
        method:'GET',
        mode:'cors',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
       })
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error});
        else this.setState({ data: res.data });
      });
  }

  clearResponses() {
    fetch('http://localhost:3001/api/responses', { 
	method: 'DELETE',
	mode: 'cors'
      })
      .then(res => res.json()).then((res) => {
        if (!res.success) this.setState({ error: res.error});
      });
  }

  render() {
    return (
      <div className="questionBody">
          <ResponseList data={this.state.data} />
          <img src={require('./high-noon-illustrations-09.png')} alt="" className="hourFix" onClick={() => this.clearResponses()}/>
          <a href="/">
            <img src={require('./high-noon-illustrations-10.png')} alt="" className="houseFix" />
          </a>
      </div>
    );
  }
}

export default ResponsePage;

