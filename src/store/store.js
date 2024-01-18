import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/counterSlice';
import postsSlice from '../posts/postsSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts:postsSlice
  },

});
