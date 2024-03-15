import './Button'

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
    <span>
        <button disabled={props.isDisabled} onClick={onClickHandler}>{props.title}</button>
      </span>
  );
}