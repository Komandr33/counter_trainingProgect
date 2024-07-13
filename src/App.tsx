import React, {useEffect} from 'react';
import './App.module.css';
import {SettingsCounter} from './components/extensionCounter/SettingsCounter';
import {Counter} from './components/counter/Counter';
import S from './App.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './state/store';
import {setSettings, updateSettings} from './state/counterReducer';

export const App = () => {

  const count = useSelector((state: AppStateType) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    const counterSettings = localStorage.getItem('Counter settings')
    if (counterSettings) {
      dispatch(updateSettings(JSON.parse(counterSettings)))
      dispatch(setSettings())
    }
  }, [dispatch])

  return (
    <div className={S.appWrapper}>
      <div className={'container'}>
        <SettingsCounter error={count.error}
                         value={count.extensionValue}
                         disSet={count.disSet}
        />
      </div>
      <div className={'container'}>
        <Counter value={count.value}
                 maxValue={count.extensionValue.max}
                 error={count.error}
                 disInc={count.disInc}
                 disReset={count.disReset}
        />
      </div>
    </div>
  );
}
