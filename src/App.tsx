import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

export type countType = number

function App() {

  const [count, setCount] = useState<countType>(0)

  const inc = () => {
    return  setCount(count + 1)
  }
  const res = () => {
  return  setCount(0)
  }

  return (
    <div className="App">
      <div>{count}</div>
      <Button title={'inc'} onClick={inc}/>
      <Button title={'reset'} onClick={res}/>
    </div>
  );
}

export default App;
