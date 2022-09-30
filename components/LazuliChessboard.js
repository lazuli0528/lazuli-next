import { React, useState, useEffect } from 'react';
import Rank from './LazuliRank';
import Square from './LazuliSquare';

function LazuliChessboard(props){
  const [length] = useState(props.length !== undefined ? props.length : 8);
  const [ranks] = useState((rankData=[])=> {
    for(var i=0; i<length; i++){
      var sqData = [];

      for(var j=0; j<length; j++){
        sqData.push({
          rank: i+1,
          col: j+1,
          class: (i + j) % 2 == 0 ? "bg-calcite" : "bg-pyrite"
        });
      }

      rankData.push({
        id: i+1,
        squares: sqData,
      });
    }

    return rankData;
  });

  return (
    <div id="chessboard" className="">
      {ranks.map((rank)=> (
        <Rank key={rank.id}>
          {rank.squares.map((sq)=> (
            <Square key={sq.rank*sq.col} class={sq.class}></Square>
          ))}
        </Rank>
      ))}
    </div>
  );
}

export default LazuliChessboard;
