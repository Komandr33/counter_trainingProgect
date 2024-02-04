import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
  value: string
  onChange: (e: string) => void,
}

export function Input(props: InputPropsType) {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.currentTarget.value)
  }

  return (
    <div>
      <input className={''} type={'number'} value={props.value} onChange={onChangeHandler}/>
    </div>
  );
}

