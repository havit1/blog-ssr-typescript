import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import styled from 'styled-components';

// Import types
import { Post as PostInterface } from '../redux/types/types';
import { RootState } from '../redux/reducers';

import { loadAllPosts } from '../redux/actions/actions';

import Spinner from '../components/Spinner/Spinner';

import PostsList from '../components/PostsList/PostsList';

const Index: NextPage = () => {
    const data: PostInterface[] = useSelector((state: RootState) => state.allPosts.posts);
    const [posts, setPosts] = React.useState(data);

    React.useEffect(() => {
        setPosts(data);
    }, [data]);

    return <Wrapper>{posts.length === 0 ? <Spinner /> : <PostsList posts={posts} />}</Wrapper>;
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

Index.getInitialProps = async ({ store }: any): Promise<any> => {
    await store.dispatch(loadAllPosts());
    return {};
};

export default Index;
