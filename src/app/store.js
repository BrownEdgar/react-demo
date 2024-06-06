import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import postsSlice from '../features/posts/postsSlice'


const myFirstMiddleWare = (store) => (next) => (action) => {
  if (action.type === 'counter/addCount') {
    action.payload = parseInt(action.payload)

  }

  next(action)
}

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), myFirstMiddleWare]
})
export default store