import React from 'react';
import './style.scss';


function Child(props) {
  console.log('Child component');
  

  return (
    
    <div className="Child">
      <h1>Child</h1>
      {props.count}
     
    </div>
  );
}

export default Child;

