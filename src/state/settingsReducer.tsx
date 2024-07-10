import {setValueType} from './counterRedcer';

const initialState = {
  setDisabled: false, //f
  incDisabled: false, //t
  resDisabled: false, //t
  error: false //f
}

export type disabledStateType = {
  setDisabled: boolean
  incDisabled: boolean
  resDisabled: boolean
  error: boolean
}

export const settingsReducer = (state: disabledStateType = initialState, action: ActionsType): disabledStateType => {
  switch (action.type) {
    case 'SET-DISABLED':
      return {...action.item}
    case 'SET-VALUE':
      return {setDisabled: true, incDisabled: false, resDisabled: false, error: false}
    // case 'INC-DISABLED':
    //   return {...state, incDisabled: !state.incDisabled}
    // case 'RES-DISABLED':
    //   return {...state, resDisabled: !state.resDisabled}
    // case 'ERROR':
    //   return {...state, error: !state.error}
    default:
      return state
  }
}

export const setDisabled = (item: disabledStateType) => ({type: 'SET-DISABLED', item} as const)
// const incDisabled = (item: string) => ({type: 'INC-DISABLED', item} as const)
// const resDisabled = (item: string) => ({type: 'RES-DISABLED', item} as const)
// const errorDisabled = (item: string) => ({type: 'ERROR', item} as const)

type ActionsType =
  | ReturnType<typeof setDisabled>
  | setValueType
// | ReturnType<typeof incDisabled>
// | ReturnType<typeof resDisabled>
// | ReturnType<typeof errorDisabled>
