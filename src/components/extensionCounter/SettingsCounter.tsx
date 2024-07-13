import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import {Input} from '../commonComponents/Input';
import s from './ExtensionCounter.module.css'
import {useDispatch} from 'react-redux';
import {extensionValueType, setError, setSettings, updateSettings} from '../../state/counterReducer';

type SettingsCounterPropsType = {
  error: boolean
  value: extensionValueType
  disSet: boolean
}

export const SettingsCounter: FC<SettingsCounterPropsType> = ({error, value, disSet}) => {

  const dispatch = useDispatch()

  const validateValues = (start: number, max: number) => {
    return start < 0 || start >= max;
  }

  const maxValueOnChangeHandler = (v: number) => {
    const newValue = {...value, max: v};
    const hasError = validateValues(newValue.start, newValue.max);
    dispatch(setError(hasError));
    dispatch(updateSettings(newValue));
  }

  const startValueOnChangeHandler = (v: number) => {
    const newValue = {...value, start: v};
    const hasError = validateValues(newValue.start, newValue.max);
    dispatch(setError(hasError));
    dispatch(updateSettings(newValue));
  }

  const buttonOnClickHandler = () => {
    dispatch(setSettings())
    localStorage.setItem('Counter settings', JSON.stringify(value))
  }

  return <div className={s.outerWrapper}>
    <div className={s.wrapper}>
      <span className={error ? s.error : s.wrapInput}>max value: <Input value={value.max}
                                                                        onChange={maxValueOnChangeHandler}/></span>
      <span className={error ? s.error : s.wrapInput}>start value: <Input value={value.start}
                                                                          onChange={startValueOnChangeHandler}/></span>
    </div>
    <div className={s.wrapper}>
      <Button title={'set'} onClick={buttonOnClickHandler}
              isDisabled={disSet}/>
    </div>
  </div>
}