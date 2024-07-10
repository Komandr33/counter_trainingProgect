import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import {DisabledType} from '../../App';
import s from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {incCounter, resetCounter} from '../../state/counterRedcer';

type CounterPropsType = {
  value: number
  maxValue: number
  disabled: DisabledType
  // setIncrement: (v: number) => void
  // reset: () => void
}

export const Counter: FC<CounterPropsType> = ({value, maxValue, disabled}) => {

  const dispatch = useDispatch()
  const incOnClickHandler = () => {
    console.log('+1')
    debugger
    dispatch(incCounter())
  }

  const resetOnClickHandler = () => {
    dispatch(resetCounter())
  }

  return <div className={s.outerWrapper}>
    <div className={s.counterWrapper}>
      {
        // disabled.error
        // ? <p className={s.error}>incorrect value!</p>
        // : disabled.resDisabled
        //   ? <p>enter value and press 'set'</p>
        //   : value === maxValue
        //     ? <h1 className={s.maxValue}>{value}</h1>
        //     :
              value}
    </div>
    <div className={s.buttonWrapper}>
      <Button title={'inc'} onClick={incOnClickHandler} isDisabled={disabled.incDisabled}/>
      <Button title={'reset'} onClick={resetOnClickHandler} isDisabled={disabled.resDisabled}/>
    </div>
  </div>
}