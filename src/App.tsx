import React from 'react';
import './App.module.css';
import {SettingsCounter} from './components/extensionCounter/SettingsCounter';
import {Counter} from './components/counter/Counter';
import S from './App.module.css'
import {useSelector} from 'react-redux';
import {AppStateType} from './state/store';

export const App = () => {

  const count = useSelector((state: AppStateType) => state.counter)

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
