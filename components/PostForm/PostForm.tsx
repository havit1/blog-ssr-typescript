import React from 'react';

import styled from 'styled-components';

const PostForm: React.FC<{ formik: Record<string, any>; isValid: boolean }> = ({ formik, isValid }) => {
    return (
        <Form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={formik.handleChange} value={formik.values.title} type="text" name="title" />

            <label htmlFor="body">Body</label>
            <textarea onChange={formik.handleChange} value={formik.values.body} name="body" />

            <button disabled={!isValid} type="submit">
                Submit
            </button>
        </Form>
    );
};

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > label {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    & > input {
        width: 70%;
        height: 60px;
        font-size: 2.5rem;
        padding: 10px;
        margin-bottom: 10px;
    }
    & > textarea {
        width: 100%;
        min-height: 200px;
        padding: 30px;
        font-size: 2rem;
        margin-bottom: 10px;
    }
    & > button {
        display: inline-block;
        margin: 20px auto;
        background: black;
        color: white;
        font-size: 1.2em;
        padding: 1em;
        border-radius: 4px;
        text-align: center;
        position: relative;
        cursor: pointer;
        border: 0;
        transition: all 500ms;
        &:disabled {
            background-color: grey;
        }
    }
`;

export default PostForm;
