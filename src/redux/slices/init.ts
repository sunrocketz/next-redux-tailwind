import { createSlice } from '@reduxjs/toolkit'

const initSlice = createSlice({
  name: 'init',
  initialState: 'Initiated',
  reducers: {
    update_init: () => '',
    reset_init: () => '',
  },
})

const { actions, reducer } = initSlice
export const { update_init, reset_init } = actions
export { reducer as init }
