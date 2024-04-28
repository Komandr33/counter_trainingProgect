import {FC} from 'react';
import {Button} from './Button';
import {DisabledType} from '../App2';

type CounterPropsType = {
  value: number
  maxValue: number
  disabled: DisabledType
  setIncrement: (v: number) => void
  reset: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {

  const incOnClickHandler = () => {
    props.setIncrement(props.value + 1)
  }

  const resetOnClickHandler = () => {
    props.reset()
  }

  return <div>
    <div>
      {props.disabled.error ? 'incorrect value!' : props.disabled.resDisabled ? 'enter value and press \'set\'' : props.value}
    </div>
    <div>
      <Button title={'inc'} onClick={incOnClickHandler} isDisabled={props.disabled.incDisabled}/>
      <Button title={'reset'} onClick={resetOnClickHandler} isDisabled={props.disabled.resDisabled}/>
    </div>
  </div>
}