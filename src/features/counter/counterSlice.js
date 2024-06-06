import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    addCount(state, action) {
      state.value += action.payload
    }
  },
  selectors: {
    getCount(state) {
      return state.value
    }
  }
})



export default counterSlice.reducer
export const { getCount } = counterSlice.selectors
export const { addCount } = counterSlice.actions