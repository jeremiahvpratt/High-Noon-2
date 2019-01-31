import React from 'react';
import PropTypes from 'prop-types';

const Question = props => (
  <div>
    <div className="linkPadding">
        <a
          href="#"
          className="singleQuestionContent"
          onClick={() => {props.sendResponse(props.question)}}>
              {props.question}
       
       </a>
    </div>
  </div>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;

