import './Button'

type ButtonType = {
  title: string
  onClick: () => void
}

export function Button(props: ButtonType) {

  const onClickHandler = () => {
    return props.onClick()
  }

  return (
    <span>
        <button className={'button'} onClick={onClickHandler}>{props.title}</button>
      </span>
  );
}