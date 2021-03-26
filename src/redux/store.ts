import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { rootReducer } from './reducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = <S, E, A>(): ThunkDispatch<S, E, Action<A>> =>
  useDispatch<AppDispatch>()
