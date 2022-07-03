import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../api/services/PostService";

const initialState = {
  posts: [],
  isLoading: true,
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const response = await PostService.getPosts();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  try {
    console.log(id);
    const response = await PostService.deletePost(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.id);
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    [deletePost.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default postSlice.reducer;
