import { React, useState, useEffect } from 'react';

const style = {
  'display': 'flex',
  'justifyContent': 'start',
  'alignItems': 'center'
};

function LazuliRank(props) {
  const [className, setClassName] = useState(props.class !== undefined ? props.class : "");

  return (
    <div id={props.id} className={className} style={style}>{props.children}</div>
  );
}

export default LazuliRank;
