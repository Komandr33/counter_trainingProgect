import {FC, useEffect, useState} from 'react';
import {Button} from '../commonComponents/Button';
import {Input} from '../commonComponents/Input';
import {DisabledType} from '../../App';
import S from './ExtensionCounter.module.css'

type ExtensionCounterPropsType = {
  disabled: DisabledType
  setDisabled: (d: boolean) => void
  setError: (d: boolean) => void
  setValue: (s: number, m: number) => void
  error: boolean
}

export const ExtensionCounter: FC<ExtensionCounterPropsType> = (props) => {

  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (startValue === maxValue || startValue > maxValue || startValue < 0) {
      props.setError(true);
      setError(true)
    } else {
      props.setError(false);
      props.setDisabled(false);
      setError(false)
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

  return <div className={S.outerWrapper}>
    <div className={S.wrapper}>
      <span className={error ? S.error : S.wrapInput}>max value: <Input value={maxValue} onChange={maxValueOnChangeHandler}/></span>
      <span className={error ? S.error : S.wrapInput}>start value: <Input value={startValue} onChange={startValueOnChangeHandler}/></span>
    </div>
    <div className={S.wrapper}>
      <Button title={'set'} onClick={buttonOnClickHandler}
              isDisabled={props.disabled.error || props.disabled.setDisabled}/>
    </div>
  </div>
}