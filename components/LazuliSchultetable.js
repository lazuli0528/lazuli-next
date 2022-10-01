import { React, useState, useEffect } from 'react';
import Rank from './LazuliRank';
import Square from './LazuliSquare';
import $ from 'jquery';

function LazuliSchultetable(props){
  const defaultLength = 5;
  const initSquareNum = (length, array=[])=> {
    for(var i=0; i<length*length; i++){
      array.push(i + 1);
    }
  
    return array;
  }

  const [length, setLength] = useState(props.length !== undefined ? props.length : defaultLength);
  const [randomArray, setRandomArray] = useState(initSquareNum(length));
  const [ranks, setRanks] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(()=> {
    shuffle();
  }, []);

  useEffect(()=> {
    setLength(props.length !== undefined ? props.length : defaultLength);
  }, [props.length]);

  useEffect(()=> {
    start();
  }, [props.isStart]);

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

      rankData.push({
        id: i+1,
        squares: sqData,
      });
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
    <div className="d-flex justify-content-center align-items-top mb-2">
      <div id="schultetable">
        <h4 className="text-center">{num}</h4>
        {ranks.map((rank)=> (
          <Rank key={rank.id}>
            {rank.squares.map((sq)=> (
              <Square key={sq.rank*sq.col} class={sq.class} value={sq.content} onClick={clickSquare}>{sq.content}</Square>
            ))}
          </Rank>
        ))}
      </div>
    </div>
  );
}

export default LazuliSchultetable;
