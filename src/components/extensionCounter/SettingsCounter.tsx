import {FC} from 'react';
import {Button} from '../commonComponents/Button';
import {Input} from '../commonComponents/Input';
import s from './ExtensionCounter.module.css'
import {useDispatch} from 'react-redux';
import {extensionValueType, setError, setSettings, updateSettings} from '../../state/counterRedcer';

type SettingsCounterPropsType = {
  error: boolean
  value: extensionValueType
}

export const SettingsCounter: FC<SettingsCounterPropsType> = ({error, value}) => {

  const dispatch = useDispatch()

  const maxValueOnChangeHandler = (v: number) => {
    if (value.start === value.max || value.start > value.max || value.max < 0) {
      dispatch(setError(true))
    } else {
      dispatch(setError(false))
    }
    dispatch(updateSettings({...value, max: v}))
  }

  const startValueOnChangeHandler = (v: number) => {
    if (value.start === value.max || value.start > value.max || value.start < 0) {
      dispatch(setError(true))
    } else {
      dispatch(setError(false))
    }
    dispatch(updateSettings({...value, start: v}))
  }

  const buttonOnClickHandler = () => {
    dispatch(setSettings(value.start))
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
              isDisabled={false}/>
    </div>
  </div>
}