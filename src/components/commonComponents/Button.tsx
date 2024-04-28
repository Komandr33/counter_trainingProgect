import './Button'
import S from './Button.module.css'

type ButtonType = {
  title: string
  onClick: () => void
  isDisabled: boolean
}

export function Button(props: ButtonType) {

  const onClickHandler = () => {
    return props.onClick()
  }

  return (
    <div>
      <button className={S.style} disabled={props.isDisabled} onClick={onClickHandler}>{props.title}</button>
    </div>
  );
}