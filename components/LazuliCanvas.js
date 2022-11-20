import { React, useState, useEffect } from 'react';
import $ from 'jquery';

function LazuliCanvas(props){
  const [canvasW] = useState(props.vw !== undefined ? props.vw : 100);
  const [canvasH] = useState(props.vh !== undefined ? props.vh : 100);
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);
  // const [data, setData] = useState([]);
  const [data, setData] = useState([35,78,65,78,50,16]);
  const [controlData, setControlData] = useState("");
  const [isPaintLine, setIsPaintLine] = useState(false);

  useEffect(()=> {
    setOriginX(Math.floor($('#canvas').offset().left));
    setOriginY(Math.floor($('#canvas').offset().top));

    for(var i=0; i<data.length; i=i+2){
      point(data[i], data[i+1]);
    }
  }, []);

  useEffect(()=> {
    var d = "";
    var q = 2;
    data.map((point, i)=> {
      if (i == 0){
        d += "M"
      }
      else if(i == q){
        d += " Q";
        q = q + 4;
      }

      d += ' ' + point;
    });

    setControlData(d);
  }, [data]);

  useEffect(()=> {
    paintLine();
  }, [isPaintLine]);

  const paintDot = (x, y, color)=> {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = $('#' + color).css('color');
    ctx.fillRect(x, y, 1, 1);
  }

  const paintLine = (x1, y1, x2, y2, color)=> {
    // const ctx = canvas.getContext("2d");
    // ctx.fillStyle = $('#' + color).css('color');
    // console.log(typeof x1);
    // ctx.moveTo(x1, y1);
    // ctx.lineTo(x1+1, y1+1);
    // ctx.lineTo(x2+1, y2+1);
    // ctx.lineTo(x2, y2);
    // ctx.lineTo(x2-1, y2-1);
    // ctx.moveTo(x1-1, y1-1);
    // ctx.fill();
  }

  const setPoint = (x, y)=>{
    var newData = [].concat(data);
    newData.push(x);
    newData.push(y);
    setData(newData);
  }

  const point = (x, y)=> {
    if (isPaintLine && data.length >= 3){
      var d = [].concat(data);
      var mx = d.pop();
      var my = d.pop();
      paintLine(mx, my, x, y, 'pyrite');
    }
    else{
      paintDot(x, y, 'pyrite');
    }

    setPoint(x, y);
  }

  const pointing = (e)=> {
    point(e.pageX - originX, e.pageY - originY);
  }

  const back = ()=> {
    var d = [].concat(data);
    var y = d.pop();
    var x = d.pop();
    setData(d);

    paintDot(x, y, 'lazuli');
  }

  return (
    <div className="d-flex justify-content-start align-items-top">
      <canvas id="canvas" className="m-2 bg-lazuli border-1-sodalite rounded"
       width={canvasW} height={canvasH}
       onClick={pointing}></canvas>
      <div>
        <nav className="navbar">
          <button type="button" className="btn btn-sm btn-hauyne" onClick={back}>←</button>
          <div className="form-check form-switch switch-pyrite">
            <input className="form-check-input" type="checkbox" role="switch" id="paintLine" defaultChecked={isPaintLine} onClick={(e)=> {setIsPaintLine(!isPaintLine);}} />
            <label className="form-check-label" htmlFor="paintLine">Line</label>
          </div>
        </nav>
        <textarea className="form-control" value={controlData} disabled></textarea>
      </div>
      <div id="pyrite" className="text-pyrite d-none"></div>
      <div id="lazuli" className="text-lazuli d-none"></div>
    </div>
  );
}

export default LazuliCanvas;
