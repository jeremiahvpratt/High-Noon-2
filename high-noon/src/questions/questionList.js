import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import shuffle from '../helperFunctions';

const QuestionList = (props) => {

  //const shuffled = shuffle(props.data);
  //const questionNodes = props.data.map(q => (
  const questionNodes = props.data.map(q => (
    <Question
      key={q._id} id={q._id}
      question={q.question}
      sendResponse={props.sendResponse}/>
    //   { q.question }
    // </Question>
  ));
  return (
    <div>
      { questionNodes }
    </div>
  );
};

QuestionList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
  })),
};

QuestionList.defaultProps = {
  data: [],
};

export default QuestionList;

