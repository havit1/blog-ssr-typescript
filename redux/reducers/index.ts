import { combineReducers } from 'redux';
import { allPostsReducer, newPostReducer, postReducer } from './reducers';

const rootReducer = combineReducers({
    allPosts: allPostsReducer,
    newPost: newPostReducer,
    post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
