import { React, useState, useEffect, Fragment } from 'react';
import $ from "jquery";

const GetLength = (len, defaultLen=8)=> {
  return len !== undefined ? len : defaultLen;
}

// ASCII 33 - 126
const randomAscii = (min = 33, max = 127)=> {
  return Math.floor(Math.random() * (max - min) + min);
}

const generatePassword = (length)=> {
  var ret = "";
  for(var i=0; i<length; i++){
    ret += String.fromCharCode(randomAscii());
  }
  return ret;
}

function LazuliPassword(props){
  const [length, setLength] = useState(GetLength(props.length));
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");

  useEffect(()=> {
    setPassword(generatePassword(length));
  }, []);

  useEffect(()=> {
    setLength(GetLength(props.length));
  }, [props.length]);

  useEffect(()=> {
    setPassword(generatePassword(length));
    $('#passwordInput').removeClass('is-valid is-invalid')
  }, [props.isReload]);

  useEffect(()=> {
    if ($('#passwordOutput').attr('type') == 'password'){
      $('#passwordOutput').attr('type', 'text');
    }
    else {
      $('#passwordOutput').attr('type', 'password');
    }
  }, [props.isHidden]);

  useEffect(()=> {
    setInput("");
  }, [password]);


  const validPassword = ()=> {
    if (input == password){
      $('#passwordInput').removeClass('is-invalid').addClass('is-valid');
    }
    else {
      $('#passwordInput').removeClass('is-valid').addClass('is-invalid');
    }
  }

  return (
    <div id="passwordgame">
      <input id="passwordOutput" type="text" className="form-control form-control-sm" value={password} style={{'width': '20rem'}} disabled></input>
      <input id="passwordInput" type="text" className="form-control form-control-sm" value={input} style={{'width': '20rem'}}
       onChange={(e)=> {setInput(e.target.value)}}
       onBlur={validPassword}></input>
    </div>
  );
}

export default LazuliPassword;
