import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';

function App() {

  const [count, setCount] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<string>('')
  const [initValue, setInitValue] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [value, setValue] = useState(['', ''])

  // if (value)

  const inc = () => {
    return setCount(count + 1)
  }
  const res = () => {
    return setCount(0)
  }

  const addMaxValue = (e: string) => {
    setMaxValue(e)
  }
  const addInitValue = (e: string) => {
    setInitValue(e)
  }

  const saveValue = () => {
    setValue([initValue, maxValue])
    console.log(value)
  }

  return (
    <div className="App">
      <div className={'wrapper'}>
        <div className={'wrapper'}>
          <div className={'element-row'}>
            <span> MAX VALUE</span>
            <Input value={maxValue} onChange={addMaxValue}/>
          </div>
          <div className={'element-row'}>
            <span> INIT VALUE</span>
            <Input value={initValue} onChange={addInitValue}/>
          </div>
        </div>
        <div className={'wrapper'}><Button isDisabled={isDisabled} title={'SET'} onClick={saveValue}/></div>
      </div>
      <div className={'wrapper'}>
        <div className={'wrapper'}><h1>{count}</h1></div>
        <div className={'wrapper'}>
          <div>
            <Button isDisabled={isDisabled} title={'inc'} onClick={inc}/>
            <Button isDisabled={isDisabled} title={'reset'} onClick={res}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
