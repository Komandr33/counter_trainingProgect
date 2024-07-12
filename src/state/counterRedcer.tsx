const initialState = {
  extensionValue: {start: 0, max: 0},
  value: 0,
  disInc: true,
  disReset: true,
  error: true
}

export type extensionValueType = { start: number, max: number }
type counterType = {
  extensionValue: extensionValueType
  value: number
  error: boolean
  disInc: boolean
  disReset: boolean
}

export const counterReducer = (state: counterType = initialState, action: ActionsType): counterType => {
  switch (action.type) {
    case 'UPDATE-SETTINGS':
      return {...state, extensionValue: {...action.val}}
    case 'SET-SETTINGS':
      return {...state, value: action.val}
    case 'INC-COUNTER':
      return {...state, value: state.value + 1}
    case 'RESET-COUNTER':
      return {...state, value: state.extensionValue.start}
    case 'DISABLED-INC':
      return {...state, disInc: action.val}
    case 'DISABLED-RESET':
      return {...state, disReset: action.val}
    case 'ERROR':
      return {...state, error: action.val}
    default:
      return state
  }
}

export const updateSettings = (val: extensionValueType) => ({type: 'UPDATE-SETTINGS', val} as const)
export const setSettings = (val: number) => ({type: 'SET-SETTINGS', val} as const)
export const incCounter = () => ({type: 'INC-COUNTER'} as const)
export const resetCounter = () => ({type: 'RESET-COUNTER'} as const)
export const disabledReset = (val: boolean) => ({type: 'DISABLED-RESET', val} as const)
export const setError = (val: boolean) => ({type: 'ERROR', val} as const)
export const disabledInc = (val: boolean) => ({type: 'DISABLED-INC', val} as const)

type ActionsType =
  | updateValueType
  | ReturnType<typeof incCounter>
  | ReturnType<typeof resetCounter>
  | ReturnType<typeof disabledReset>
  | ReturnType<typeof setSettings>
  | ReturnType<typeof setError>
  | ReturnType<typeof disabledInc>

export type updateValueType = ReturnType<typeof updateSettings>