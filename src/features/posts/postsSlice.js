import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAcyncPosts from './postsApi'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  getAcyncPosts
)


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  },
  selectors: {
    getAllPosts: (state) => {
      return state
    }
  }
})

export default postsSlice.reducer
export const { getAllPosts } = postsSlice.selectors