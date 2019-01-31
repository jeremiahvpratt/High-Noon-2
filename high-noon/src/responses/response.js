import React from 'react';
import PropTypes from 'prop-types';

const Response = props => (
  <div>
    <div>
      <div>
        <p>{props.response} — {props.time.slice(0,props.time.indexOf(':')+6).toLowerCase()} — {props.place}</p>
      </div>
    </div>
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Response;
