import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';

import styled from 'styled-components';

// Import types
import { Post as PostInterface } from '../../redux/types/types';

type TPostProps = {
    data: PostInterface;
    fromList?: boolean;
};

const Post: React.SFC<TPostProps> = ({ data, fromList = false }) => {
    if (fromList) {
        return (
            <Link key={data.id} href="/posts/[id]" as={`/posts/${data.id}`}>
                <TitleCard>
                    <h1>{data.title}</h1>
                </TitleCard>
            </Link>
        );
    } else {
        return (
            <PostCard>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </PostCard>
        );
    }
};

const PostCard = styled.div`
    width: 50%;
    display: flex;
    justify-content: cetner;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    & > h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    & > p {
        font-size: 2rem;
        line-height: 3.5rem;
    }
`;

const TitleCard = styled.a`
    font-size: 1.25em;
    cursor: pointer;
    letter-spacing: 3px;

    & > h1 {
        transition: all 500ms;
        padding: 10px;

        &:hover {
            background-color: palevioletred;
            color: papayawhip;
            box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        }
    }
`;

export default Post;
