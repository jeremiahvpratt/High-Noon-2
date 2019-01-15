import React from 'react';
import PropTypes from 'prop-types';

const Question = props => (
  <div>
    <div className="linkPadding">
        <a
          href='look'
          onClick={() => {props.sendResponse(props.question)}}
          className="singleQuestionContent">
          {props.question}
        </a>
    </div>
  </div>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;

