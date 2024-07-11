import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import s from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {incCounter, resetCounter} from '../../state/counterRedcer';

type CounterPropsType = {
  value: number
  maxValue: number
  error: boolean
}

export const Counter: FC<CounterPropsType> = ({value, maxValue, error}) => {

  const dispatch = useDispatch()
  const incOnClickHandler = () => {
    dispatch(incCounter())
  }

  const resetOnClickHandler = () => {
    dispatch(resetCounter())
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
      <Button title={'inc'} onClick={incOnClickHandler} isDisabled={false}/>
      <Button title={'reset'} onClick={resetOnClickHandler} isDisabled={false}/>
    </div>
  </div>
}