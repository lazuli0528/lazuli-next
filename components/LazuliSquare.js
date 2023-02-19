import { React, useState } from 'react';

function LazuliSquare(props){
  const style = {
    'height': props.height !== undefined ? props.height : '2rem',
    'width': props.width !== undefined ? props.width : '2rem',
    // 'border-radius': '0.1rem',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
  };

  if (props.onClick !== undefined){
    style['cursor'] = 'pointer';
    style['userSelect'] = 'none';
    style['WebkitUserSelect'] = 'none';
    style['MozUserSelect'] = 'none';
    style['msUserSelect'] = 'none';
  }
  
  return (
    <div id={props.id} className={props.class} value={props.value} style={style} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default LazuliSquare;
