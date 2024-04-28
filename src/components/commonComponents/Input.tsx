import React, {ChangeEvent} from 'react';

type InputPropsType = {
  value: number
  onChange: (e: number) => void
}

export function Input(props: InputPropsType) {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.valueAsNumber) // получает значение как число, а не как строку
  }

  return (
    <div>
      <input type={'number'} value={props.value} onChange={onChangeHandler}/>
    </div>
  );
}

