import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';


function App() {
  const [count, setCount] = useState(0)
  const [incIsDisabled, setIncIsDisabled] = useState(false)
  const [resIsDisabled, setResIsDisabled] = useState(false)
  const [buttonSetIsDisabled, setButtonSetIsDisabled] = useState(false)
  const [value, setValue] = useState({startValue: 0, maxValue: 0})
  const [error, setError] = useState('')

  const incHandler = () => {
    if (count === value.maxValue - 1) {
      setIncIsDisabled(true)
      styleValue = true
    }
    setCount(count + 1)
  }

  const resHandler = () => {
    setCount(value.startValue)
    setIncIsDisabled(false)
  }

  const addMaxValue = (v: number) => {
    if (v >= 0) {
      setValue({...value, maxValue: v})
      setIncIsDisabled(true)
      setResIsDisabled(true)
      setError('')
    }
    setError('incorrect value!')
  }

  const addStartValue = (v: number) => {
    if (v >= 0) {
      setValue({...value, startValue: v})
      setIncIsDisabled(true)
      setResIsDisabled(true)
      setError('')
    }
    setError('incorrect value!')
  }

  const saveValue = () => {
    setCount(value.startValue)
    setButtonSetIsDisabled(true)
    setIncIsDisabled(false)
    setResIsDisabled(false)
  }

  let val = buttonSetIsDisabled ? 'enter value and press \'set\'' : count
  let styleValue = false
  return (
    <div className="App">
      <div className={'wrapper'}>
        <div className={'wrapper'}>
          <div className={'element-row'}>
            <span> MAX VALUE</span>
            <Input value={value.maxValue} onChange={addMaxValue}/>
          </div>
          <div className={'element-row'}>
            <span> START VALUE</span>
            <Input value={value.startValue} onChange={addStartValue}/>
          </div>
        </div>
        <div className={'wrapper'}><Button isDisabled={buttonSetIsDisabled} title={'SET'} onClick={saveValue}/></div>
      </div>

      <div className={'wrapper'}>
        <div className={'wrapper'}><h1 className={styleValue ? 'maxVal' : ''}>{count ? count : val}</h1></div>
        <div className={'wrapper'}>
          <div>
            <Button isDisabled={incIsDisabled} title={'inc'} onClick={incHandler}/>
            <Button isDisabled={resIsDisabled} title={'reset'} onClick={resHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
