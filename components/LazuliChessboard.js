import { React, useState, useEffect } from 'react';
import Rank from './LazuliRank';
import Square from './LazuliSquare';

function BasicPiecePosition(rank, file){
  switch(rank) {
    case 1:
      return 'w-' + ExceptPawn(file);
    case 2:
      return 'w-pawn'; 
    case 7:
      return 'b-pawn';
    case 8:
      return 'b-' +  ExceptPawn(file);
  }

  function ExceptPawn(file){
    switch(file) {
      case 'a':
        return 'rook';
      case 'b':
        return 'knight';
      case 'c':
        return 'bishop';
      case 'd':
        return 'queen';
      case 'e':
        return 'king';
      case 'f':
        return 'bishop';
      case 'g':
        return 'knight';
      case 'h':
        return 'rook';
      default:
        break;
    }
  }
}

function LazuliChessboard(props){
  const [length] = useState(props.length !== undefined ? props.length : 8);
  const [ranks] = useState((rankData=[])=> {
    for(var i=0; i<length; i++){
      var sqData = [];

      for(var j=0; j<length; j++){
        const rank = length-i;
        const file = String.fromCharCode(97 + j);
        var sqClass = (i + j) % 2 == 0 ? "bg-calcite" : "bg-pyrite";
        sqClass += ' ' + BasicPiecePosition(rank, file);

        sqData.push({
          rank: rank,
          file: file,
          class: sqClass
        });
      }

      rankData.push(sqData);
    }

    return rankData;
  });

  const move = ()=> {
    
  }

  return (
    <div id="chessboard" className="m-2">
      {ranks.map((rank, i)=> (
        <Rank key={i}>
          {rank.map((sq, j)=> (
            <Square key={j} class={sq.class} onClick={move}></Square>
          ))}
        </Rank>
      ))}
    </div>
  );
}

export default LazuliChessboard;
