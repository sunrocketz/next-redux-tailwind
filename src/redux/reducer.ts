import { combineReducers } from 'redux'
import { init } from './slices/init'

export const rootReducer = combineReducers({
  init,
})

export type AppState = ReturnType<typeof rootReducer>
