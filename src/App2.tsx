import React, {useState} from 'react';
import './App.css';
import {ExtensionCounter} from './components/ExtensionCounter';
import {Counter} from './components/Counter';

// const state = {
//   countValue: 0,
//   startValue: 0,
//   maxValue: 0,
//   extensionDisabled: true,
//   counterDisabled: false
// }
//
// type StateType = typeof state

export type DisabledType = {
  setDisabled: boolean
  incDisabled: boolean
  resDisabled: boolean
  error: boolean
}

export const App2 = () => {

  const disValue = {
    setDisabled: false,
    incDisabled: true,
    resDisabled: true,
    error: false
  }

  const [extensionValue, setExtensionValue] = useState({start: 0, max: 0})
  const [disabled, setDisabled] = useState<DisabledType>(disValue)
  const [countValue, setCountValue] = useState(0)

  const setValueHandler = (s: number, m: number) => {
    setExtensionValue({...extensionValue, start: s, max: m})
    setCountValue(s)
    setDisabled({...disValue, setDisabled: true, incDisabled: false, resDisabled: false})
  }

  const countValueHandler = (v: number) => {
    if (extensionValue.max === v) {
      setDisabled({...disValue, setDisabled: true, resDisabled: false, incDisabled: true})
    }
    setCountValue(v)
  }

  const resetHandler = () => {
    setCountValue(extensionValue.start)
    setDisabled({...disValue, setDisabled: true, resDisabled: false, incDisabled: false})
  }

  const setError = (e: boolean) => {
    setDisabled({...disValue, error: e})
  }

  const extensionDisabledHandler = (e: boolean) => {
    setDisabled({...disValue, setDisabled: e})
  }

  let i = countValue === extensionValue.max

  return (
    <div className="App">
      <ExtensionCounter disabled={disabled}
                        setDisabled={extensionDisabledHandler}
                        setError={setError}
                        setValue={setValueHandler}
      />
      <Counter value={countValue}
               maxValue={extensionValue.max}
               disabled={disabled}
               setIncrement={countValueHandler}
               reset={resetHandler}
      />
    </div>
  );
}
