import {FC, useEffect, useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';
import {DisabledType} from '../App2';

type ExtensionCounterPropsType = {
  disabled: DisabledType
  setDisabled: (d: boolean) => void
  setError: (d: boolean) => void
  setValue: (s: number, m: number) => void
}

export const ExtensionCounter: FC<ExtensionCounterPropsType> = (props) => {

  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)

  useEffect(() => {
    if (startValue === maxValue || startValue > maxValue || startValue < 0) {
      props.setError(true);
    } else {
      props.setError(false);
      props.setDisabled(false);
    }
  }, [startValue, maxValue])

  const maxValueOnChangeHandler = (v: number) => {
    setMaxValue(v);
  }
  const startValueOnChangeHandler = (v: number) => {
    setStartValue(v);
  }

  const buttonOnClickHandler = () => {
    props.setValue(startValue, maxValue);
  }

  return <div>
    <div>
      <div>max value: <Input value={maxValue} onChange={maxValueOnChangeHandler}/></div>
      <div>start value: <Input value={startValue} onChange={startValueOnChangeHandler}/></div>
    </div>
    <div>
      <Button title={'set'} onClick={buttonOnClickHandler} isDisabled={props.disabled.error || props.disabled.setDisabled}/>
    </div>
  </div>
}