import React from 'react';
import PropTypes from 'prop-types';
import Response from './response';

const ResponseList = (props) => {
  const sorted = props.data.slice().sort(function (a,b) {
    return a['updatedAt'] > b['updatedAt'] ? -1 : 1;
  });
  //const responseNodes = props.data.map(r => (
  const responseNodes = sorted.map(r => (
    <Response
      key={r._id} id={r._id}
      response={r.selection}
      time={r.time}
      timestamp={r.updatedAt}/>
  ));
  return (
    <div>
      {responseNodes}
    </div>
  );
};

ResponseList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    response: PropTypes.string,
    time: PropTypes.string,
  })),
};

ResponseList.defaultProps = {
  data: [],
};

export default ResponseList;

