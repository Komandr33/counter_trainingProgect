import {FC, useEffect, useState} from 'react';
import {Button} from '../commonComponents/Button';
import {Input} from '../commonComponents/Input';
import {DisabledType} from '../../App';
import S from './ExtensionCounter.module.css'
import {useDispatch} from 'react-redux';
import {disabledStateType, setDisabled} from '../../state/settingsReducer';

type ExtensionCounterPropsType = {
  disabled: DisabledType
  // setDisabled: (d: boolean) => void
  // setError: (d: boolean) => void
  // setValue: (s: number, m: number) => void
  // error: boolean
}

export const ExtensionCounter: FC<ExtensionCounterPropsType> = ({disabled}) => {

  const dispatch = useDispatch()

  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [err, setErr] = useState(false)

  // useEffect(() => {
  //   if (startValue === maxValue || startValue > maxValue || startValue < 0) {
  //     setError(true);
  //     setErr(true)
  //   } else {
  //     setError(false);
  //     setErr(false)
  //     // setDisabled(false);
  //   }
  // }, [startValue, maxValue, setValue])

  const maxValueOnChangeHandler = (v: number) => {
    setMaxValue(v);
  }
  const startValueOnChangeHandler = (v: number) => {
    setStartValue(v);
  }

  const buttonOnClickHandler = () => {

    dispatch(setDisabled({
      setDisabled: false,
      incDisabled: false,
      resDisabled: false,
      error: false
    }))
  }

  return <div className={S.outerWrapper}>
    <div className={S.wrapper}>
      <span className={err? S.error : S.wrapInput}>max value: <Input value={maxValue} onChange={maxValueOnChangeHandler}/></span>
      <span className={err ? S.error : S.wrapInput}>start value: <Input value={startValue} onChange={startValueOnChangeHandler}/></span>
    </div>
    <div className={S.wrapper}>
      <Button title={'set'} onClick={buttonOnClickHandler}
              isDisabled={disabled.error || disabled.setDisabled}/>
    </div>
  </div>
}