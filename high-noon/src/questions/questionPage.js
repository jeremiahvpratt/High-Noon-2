import React, { Component } from 'react';
import QuestionList from './questionList';
import QUESTIONS from './questions';

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = { data: []};
  }
  onSubmitResponse = (question) => {
    fetch('http://localhost:3001/api/responses', {
      method: 'POST',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question}),
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

export default QuestionPage;

