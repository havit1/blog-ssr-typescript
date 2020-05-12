// REDUX ACTION TYPES
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_START = 'GET_ALL_POSTS_START';
export const GET_ALL_POSTS_ERROR = 'GET_ALL_POSTS_ERROR';

export const GET_POST_START = 'GET_POST_START';
export const GET_POST = 'GET_POST';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const CREATE_NEW_POST_START = 'CREATE_NEW_POST_START';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const CREATE_NEW_POST_ERROR = 'CREATE_NEW_POST_ERROR';

export interface PostState {
    posts: Post[];
}

export interface Post {
    id?: number | null;
    body: string;
    title: string;
    comments?: Array<{}>;
}

interface LoadPostAction {
    type: typeof GET_POST;
    payload?: Post;
}

interface LoadAllPostsAction {
    type: typeof GET_ALL_POSTS;
    payload?: Post[];
}

interface CreateNewPostAction {
    type: typeof CREATE_NEW_POST;
    payload?: Post;
}

export type PostsActionType = LoadAllPostsAction | CreateNewPostAction | LoadPostAction;
