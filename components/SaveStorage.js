import { React, useState, useEffect } from 'react';

function useStorage(name){ 
  // const [storage, setStorage] = useState(value);
  const [storage, setStorage] = useState(null);

  // const value = ()=> {  
  //   let st = localStorage.getItem(name);
  //   return st;
  // }

  const setValue = (content)=> {
    localStorage.setItem(name, content);
    setStorage(content);
  }

  return [storage, setValue];
}

export default useStorage;