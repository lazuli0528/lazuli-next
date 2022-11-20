import { React, useState, useEffect } from 'react';
import Rank from './LazuliRank';
import Square from './LazuliSquare';
import $ from 'jquery';

const GetLength = (len, defaultLen=5)=> {
  return len !== undefined ? len : defaultLen;
}

function LazuliSchultetable(props){
  const initSquareNum = (length, array=[])=> {
    for(var i=0; i<length*length; i++){
      array.push(i + 1);
    }
  
    return array;
  }

  const [length, setLength] = useState(GetLength(props.length));
  const [randomArray, setRandomArray] = useState(initSquareNum(length));
  const [ranks, setRanks] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(()=> {
    shuffle();
  }, []);

  useEffect(()=> {
    setLength(GetLength(props.length));
  }, [props.length]);

  useEffect(()=> {
    start();
  }, [props.isReload]);

  useEffect(()=> {
    shuffle();
  }, [randomArray]);

  const start = ()=> {
    setRandomArray(initSquareNum(length));
    setNum(1);
  }

  const shuffle = ()=> {
    randomArray.sort(()=> { return 0.5 - Math.random() });

    var rankData = [];
    for(var i=0; i<length; i++){
      var sqData = [];

      for(var j=0; j<length; j++){
        sqData.push({
          rank: i+1,
          col: j+1,
          content: randomArray[i*length+j],
          class: "bg-lazurite border-1-pyrite"
        });
      }

      rankData.push(sqData);
    }

    setRanks(rankData);
  }

  const clickSquare = (e)=> {
    if (num == e.target.getAttribute("value")){
      if (num < length*length){
        setNum(num+1);
      }
  
      $(e.target).removeClass('bg-lazurite').addClass('bg-hauyne');
      setTimeout(()=> {
        $(e.target).removeClass('bg-hauyne').addClass('bg-lazurite');
      }, 100);
    }
  }

  return (
    <div id="schultetable">
      {ranks.map((rank, i)=> (
        <Rank key={i}>
          {rank.map((sq)=> (
            <Square key={sq.rank*sq.col} class={sq.class} value={sq.content} onClick={clickSquare}>{sq.content}</Square>
          ))}
        </Rank>
      ))}
    </div>
  );
}

export default LazuliSchultetable;
