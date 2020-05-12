import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch, AnyAction } from 'redux';
import axios from 'axios';
import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_ERROR,
    GET_ALL_POSTS_START,
    GET_POST,
    GET_POST_ERROR,
    GET_POST_START,
    CREATE_NEW_POST,
    CREATE_NEW_POST_ERROR,
    CREATE_NEW_POST_START,
    Post,
} from '../types/types';

import { sortArrayById } from '../../utils/sortArray';

import { RootState } from '../reducers/index';

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export function loadAllPosts(): AppThunk {
    return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
        dispatch({ type: GET_ALL_POSTS_START });
        try {
            const { data } = await axios.get('https://simple-blog-api.crew.red/posts');
            sortArrayById(data);
            dispatch({
                type: GET_ALL_POSTS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_POSTS_ERROR,
                payload: error.message,
            });
        }
    };
}

export function loadPost(id: number): AppThunk {
    return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
        dispatch({ type: GET_POST_START });
        try {
            const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
            dispatch({
                type: GET_POST,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_POST_ERROR,
                payload: error.message,
            });
        }
    };
}

export function createNewPost(post: Post, callback: Function): AppThunk {
    return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
        dispatch({ type: CREATE_NEW_POST_START });
        try {
            const { data } = await axios.post('https://simple-blog-api.crew.red/posts', {
                ...post,
            });
            dispatch({
                type: CREATE_NEW_POST,
                payload: data,
            });
            callback();
        } catch (error) {
            dispatch({
                type: CREATE_NEW_POST_ERROR,
                payload: error.message,
            });
        }
    };
}
