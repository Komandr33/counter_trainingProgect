const initialState = {
  extensionValue: {start: 0, max: 0},
  value: 0,
  disInc: true,
  disReset: true,
  disSet: true,
  error: false
}

export type extensionValueType = { start: number, max: number }
type counterType = {
  extensionValue: extensionValueType
  value: number
  disInc: boolean
  disReset: boolean
  disSet: boolean
  error: boolean
}

export const counterReducer = (state: counterType = initialState, action: ActionsType): counterType => {
  switch (action.type) {
    case 'UPDATE-SETTINGS':
      return {...state, disInc: true, disReset: true, extensionValue: {...action.val}}
    case 'SET-SETTINGS':
      return {...state, value: state.extensionValue.start, disInc: false, disReset: false, disSet: true}
    case 'INC-COUNTER':
      return {...state, value: state.value + 1}
    case 'RESET-COUNTER':
      return {...state, value: state.extensionValue.start}
    case 'DISABLED-INC':
      return {...state, disInc: action.val}
    case 'DISABLED-RESET':
      return {...state, disReset: action.val}
    case 'DISABLED-SET':
      return {...state, disSet: action.val}
    case 'SET-ERROR':
      return {...state, disSet: action.val, error: action.val}
    default:
      return state
  }
}

export const updateSettings = (val: extensionValueType) => ({type: 'UPDATE-SETTINGS', val} as const)
export const setSettings = () => ({type: 'SET-SETTINGS'} as const)
export const incCounter = () => ({type: 'INC-COUNTER'} as const)
export const resetCounter = () => ({type: 'RESET-COUNTER'} as const)
export const disabledSet = (val: boolean) => ({type: 'DISABLED-SET', val} as const)
export const disabledInc = (val: boolean) => ({type: 'DISABLED-INC', val} as const)
export const disabledReset = (val: boolean) => ({type: 'DISABLED-RESET', val} as const)
export const setError = (val: boolean) => ({type: 'SET-ERROR', val} as const)

type ActionsType =
  | updateValueType
  | ReturnType<typeof setSettings>
  | ReturnType<typeof incCounter>
  | ReturnType<typeof resetCounter>
  | ReturnType<typeof disabledSet>
  | ReturnType<typeof disabledInc>
  | ReturnType<typeof disabledReset>
  | ReturnType<typeof setError>



export type updateValueType = ReturnType<typeof updateSettings>