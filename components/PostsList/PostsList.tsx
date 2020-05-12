import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Post from '../Post/Post';

// Import types
import { Post as PostInterface } from '../../redux/types/types';

type TPostsListProps = {
    posts: PostInterface[];
};

const PostsList: React.SFC<TPostsListProps> = ({ posts }) => {
    return (
        <List>
            {posts.map((el: PostInterface) => (
                <li key={el.id}>
                    <Post data={el} fromList={true} />
                </li>
            ))}
        </List>
    );
};

const List = styled.ul`
    width: 70%;
    padding: 0 40px 0 40px;
    margin: 20px auto;

    & li {
        margin: 20px 0 20px 0;
    }
`;

export default PostsList;
