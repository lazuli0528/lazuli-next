import React from 'react';
import { useState, useEffect } from 'react';
import useStorage from './SaveStorage';
import $ from 'jquery';

function Sample1(props){
  const [input, setInput] = useState("");
  const [value, setValue] = useStorage("message");
  const [data, setData] = useState(value ? JSON.parse(value) : []);
  const [headCheck, setHeadCheck] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(true);
  const tableId = "sample1-table";

  useEffect(()=> {
    let st = localStorage.getItem("message");
    setData(JSON.parse(st !== null ? st : []));
  }, []);

  useEffect(()=> {
    $('#' + tableId + ' thead :checkbox').prop("checked", headCheck);
  }, [headCheck]);

  useEffect(()=> {
    var target = data.filter((d)=>{
      return d[0] == true;
    });

    var targetValue = target.length > 0 ? target[0][1] : false;

    updateBtn ? setInput("") : setInput(targetValue);
  }, [updateBtn]);

  const checkAllData = (isChecked)=> {
    for(let i=0; i<data.length; i++){
      data[i][0] = isChecked;
    }
  }

  const checkAllProp = (isChecked)=> {
    $('#' + tableId + ' tbody :checkbox').each((i, chk)=> {
      $(chk).prop("checked", isChecked);
    });
  }

  const checkAll = (e)=> {
    var isChecked = e.target.checked;
    initAllCheck(isChecked);
  }

  const initAllCheck = (isChecked)=> {
    setHeadCheck(isChecked);
    checkAllData(isChecked);
    checkAllProp(isChecked);
  }

  const selectRow = (e)=> {
    var idx = $(e.target).parents('tr').index();
    data[idx][0] = e.target.checked;

    setData(data);
    setHeadCheck($('#' + tableId + ' tbody :checkbox:checked').length == $('#' + tableId + ' tbody :checkbox').length);
    setUpdateBtn($('#' + tableId + ' tbody :checkbox:checked').length != 1);
  }

  const inputit = (event)=> {
    setInput(event.target.value);
  }

  const addit = ()=> {
    initAllCheck(false);

    data.unshift([
      false,
      input,
      new Date().toLocaleString()
    ]);

    if (data.length > 10){
      data.pop();
    }
    
    setData(data);
    setValue(JSON.stringify(data));
    setInput("");
  }

  const initit = ()=> {
    setData([]);
    setValue(JSON.stringify([]));
    setInput("");
  }

  const removeit = ()=> {
    var removed = data.filter((d)=> {
      return d[0] == false;
    });

    setData(removed);
    setValue(JSON.stringify(removed));
    setInput("");
    setHeadCheck(false);
    checkAllProp(false);
  }

  const updateit = ()=> {
    var targetIndex = data.findIndex((d)=> {
      return d[0] == true;
    });

    data[targetIndex][1] = input;

    initAllCheck(false);
    setData(data);
    setValue(JSON.stringify(data));
    setInput("");
  }

  
  let item_id = 0;

  return (
    <div className="container">
    {/* <div className="card">
      <div className="card-header "></div>
      <div className="card-body p-1">
        <textarea className="form-control" disabled>{data && data[0] ? data[0][0] : "nodata."}</textarea>
      </div>
      <div className="card-footer "></div>
    </div> */}

    <div className="row row-cols-2">
      <div className="col mb-3">
        <nav className="navbar">
          <div className="d-flex justify-contents-start align-items">
            <button type="button" className="btn btn-primary btn-sm" onClick={addit}>ADD</button>
            <div className="ms-2"></div>
            <button type="button" className="btn btn-danger btn-sm" onClick={updateit} disabled={updateBtn}>UPDATE</button>
          </div>
        </nav>

        <textarea className="form-control mt-1" onChange={inputit} value={input}></textarea>
      </div>
      <div className="col mb-3">
        <nav className="navbar">
          <div className="d-flex justify-contents-start align-items">
            <button type="button" className="btn btn-warning btn-sm" onClick={initit}>INIT</button>
            <div className="ms-2"></div>
            <button type="button" className="btn btn-danger btn-sm" onClick={removeit}>DEL</button>
          </div>
        </nav>

        <div className="table-responsive">
              <table id={tableId} className="table table-sm table-bordered table-hover">
                <thead>
                  <tr className="alert-primary">
                    <th><input type="checkbox" className="form-check-input" defaultChecked={headCheck} onClick={checkAll}></input></th>
                    <th className="align-middle">message</th>
                    <th className="align-middle">time</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val) =>(
                    <tr key={item_id++}>
                      <td className="align-middle">
                        <input type="checkbox" className="form-check-input" onChange={selectRow} defaultChecked={val[0]}></input>
                      </td>
                      <td className="align-middle">{val[1]}</td>
                      <td className="align-middle">{val[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </div>
    </div>
  </div>
);
}

export default Sample1;
