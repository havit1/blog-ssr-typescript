import { PostState, PostsActionType, Post, GET_ALL_POSTS, GET_POST, CREATE_NEW_POST } from '../types/types';

const initialAllPostsState: PostState = {
    posts: [],
};

function allPostsReducer(state = initialAllPostsState, action: PostsActionType): PostState {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                posts: action.payload,
            };
        default:
            return state;
    }
}

const postState: Post = {
    id: null,
    body: '',
    title: '',
};

function postReducer(state = postState, action: PostsActionType): Post {
    switch (action.type) {
        case GET_POST:
            return {
                id: action.payload.id,
                body: action.payload.body,
                title: action.payload.title,
                comments: action.payload.comments,
            };
        default:
            return state;
    }
}

const initialNewPostState: Post = {
    id: null,
    body: '',
    title: '',
    comments: [],
};

const newPostReducer = (state = initialNewPostState, action: PostsActionType): Post => {
    switch (action.type) {
        case CREATE_NEW_POST:
            return {
                id: action.payload.id,
                body: action.payload.body,
                title: action.payload.title,
                comments: [],
            };
        default:
            return state;
    }
};

export { allPostsReducer, newPostReducer, postReducer };
