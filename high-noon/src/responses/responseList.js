import React from 'react';
import PropTypes from 'prop-types';
import Response from './response';

const ResponseList = (props) => {
  var responseNodes;
  if(props.data != null){
    const sorted = props.data.slice().sort(function (a,b) {
      return a['updatedAt'] > b['updatedAt'] ? -1 : 1;
    });
    responseNodes = sorted.map(r => (
       <Response
         key={r._id} id={r._id}
         response={r.selection}
         place={r.location}
         time={r.time}
         timestamp={r.updatedAt}/>
     ));
  } else {
    responseNodes = <p>too late i guess, maybe next time.</p>;
  }
//  return (
//      <table>
//        {sorted.map((s) =>{
//          return(
//            <tr>
//              <td>{s.selection}</td>
//              <td>{s.time}</td>
//              <td>{s.location}</td>
//            </tr>
//          );
//        })}
//      </table>
//  );
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
    place: PropTypes.string,
    time: PropTypes.string,
  })),
};

ResponseList.defaultProps = {
  data: [],
};

export default ResponseList;
