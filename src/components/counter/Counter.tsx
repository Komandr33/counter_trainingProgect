import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import s from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {incCounter, resetCounter, disabledInc} from '../../state/counterRedcer';

type CounterPropsType = {
  value: number
  maxValue: number
  error: boolean
  disInc: boolean
  disReset: boolean
}

export const Counter: FC<CounterPropsType> = ({value, maxValue, error, disInc, disReset}) => {

  const dispatch = useDispatch()

  const incOnClickHandler = () => {
    dispatch(incCounter())
    if (value === maxValue - 1) {
      dispatch(disabledInc(true))
    }
  }

  const resetOnClickHandler = () => {
    dispatch(resetCounter())
    dispatch(disabledInc(false))
  }

  return <div className={s.outerWrapper}>
    <div className={s.counterWrapper}>
      {
        error
          ? <p className={s.error}>incorrect value!</p>
          : error
            ? <p>enter value and press 'set'</p>
            : value === maxValue
              ? <h1 className={s.maxValue}>{value}</h1>
              :
              value}
    </div>
    <div className={s.buttonWrapper}>
      <Button title={'inc'} onClick={incOnClickHandler} isDisabled={disInc}/>
      <Button title={'reset'} onClick={resetOnClickHandler} isDisabled={disReset}/>
    </div>
  </div>
}