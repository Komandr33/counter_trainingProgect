import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import {DisabledType} from '../../App';
import S from './Counter.module.css'

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

  return <div className={S.outerWrapper}>
    <div className={S.counterWrapper}>
      {props.disabled.error
        ? <p className={S.error}>incorrect value!</p>
        : props.disabled.resDisabled
          ? <p>enter value and press 'set'</p>
          : props.value === props.maxValue
            ? <h1 className={S.maxValue}>{props.value}</h1>
            : props.value}
    </div>
    <div className={S.buttonWrapper}>
      <Button title={'inc'} onClick={incOnClickHandler} isDisabled={props.disabled.incDisabled}/>
      <Button title={'reset'} onClick={resetOnClickHandler} isDisabled={props.disabled.resDisabled}/>
    </div>
  </div>
}