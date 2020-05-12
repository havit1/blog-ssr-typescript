/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NextPage } from 'next';

import styled from 'styled-components';

import Post from '../../../components/Post/Post';

import { loadPost } from '../../../redux/actions/actions';
import { useSelector } from 'react-redux';

// Import types
import { Post as PostInterface } from '../../../redux/types/types';
import { RootState } from '../../../redux/reducers';

const PostPage: NextPage = () => {
    const data: PostInterface = useSelector((state: RootState) => state.post);
    const [post, setPost] = React.useState(data);

    React.useEffect(() => {
        setPost(data);
    }, [data]);

    return (
        <Wrapper>
            <Post data={post} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin-top: 50px;
    min-height: 50vh;
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
PostPage.getInitialProps = async ({ store, query: { id } }: any) => {
    await store.dispatch(loadPost(parseInt(id.toString())));

    return {};
};

export default PostPage;
