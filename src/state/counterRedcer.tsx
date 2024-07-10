const initialState = {
  extensionValue: {start: 0, max: 0},
  value: 0,
}
type extensionValueType = { start: number, max: number }
type counterType = {
  extensionValue: extensionValueType
  value: number
}

export const counterReducer = (state: counterType = initialState, action: ActionsType): counterType => {
  switch (action.type) {
    case 'SET-VALUE':
      return {...state, extensionValue: {...state.extensionValue, start: action.val.start}}
    case 'INC-COUNTER':
      return {...state, value: state.value + 1}
    case 'RESET-COUNTER':
      return {...state, value: state.extensionValue.start}
    default:
      return state
  }
}

export const setValue = (val: extensionValueType) => ({type: 'SET-VALUE', val} as const)
export const incCounter = () => ({type: 'INC-COUNTER'} as const)
export const resetCounter = () => ({type: 'RESET-COUNTER'} as const)
export const disabled = (item: string) => ({type: 'DISABLED', item} as const)

type ActionsType =
  | setValueType
  | ReturnType<typeof incCounter>
  | ReturnType<typeof resetCounter>
  | ReturnType<typeof disabled>

export type setValueType = ReturnType<typeof setValue>