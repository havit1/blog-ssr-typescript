import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import PostForm from '../../../components/PostForm/PostForm';

import { createNewPost } from '../../../redux/actions/actions';

import styled from 'styled-components';

const NewPostForm: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isValid, setIsValid] = React.useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
        },
        onSubmit: async (values) => {
            dispatch(createNewPost(values, () => router.push('/')));
        },
        validate({ title, body }) {
            if (body.trim().length === 0) setIsValid(false);
            else if (title.trim().length === 0) setIsValid(false);
            else setIsValid(true);
        },
    });

    return (
        <Wrapper>
            <PostForm formik={formik} isValid={isValid} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    min-height: 60vh;
`;

export default NewPostForm;
