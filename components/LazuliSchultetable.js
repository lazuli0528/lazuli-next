import { React, useState, useEffect, Fragment } from 'react';
import Rank from './LazuliRank';
import Square from './LazuliSquare';
import $ from 'jquery';

const initSquareNum = (length, array=[])=> {
  for(var i=0; i<length*length; i++){
    array.push(i + 1);
  }

  return array;
}

function LazuliSchultetable(props){
  const [length, setLength] = useState(props.length !== undefined ? props.length : 0);
  const [randomArray, setRandomArray] = useState(initSquareNum(length));
  const [ranks, setRanks] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(()=> {
    shuffle();
  }, []);

  useEffect(()=> {
    setRandomArray(initSquareNum(length));
    setNum(1);
  }, [length]);

  useEffect(()=> {
    shuffle();
  }, [randomArray]);

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
    <Fragment>
      <nav className="navbar">
        <div className="ms-auto"></div>
        <input type="number" className="form-control form-control-sm" style={{'height': '1rem', 'width': '4rem'}} value={length} onChange={(e)=> { setLength(e.target.value) }}></input>
      </nav>
      <div className="d-flex justify-content-center align-items-top">
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
    </Fragment>
  );
}

export default LazuliSchultetable;
