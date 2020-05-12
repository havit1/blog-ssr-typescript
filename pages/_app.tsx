/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { NextPageContext } from 'next';
import App from 'next/app';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import withReduxStore from '../lib/with-redux-store';

import { GlobalStyle } from '../styles/globalStyles';
import Navbar from '../components/Navbar/Navbar';
export interface MyPageContext extends NextPageContext {
    store: Store;
    isServer?: boolean;
}

interface Props {
    store: Store;
}
class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <>
                <GlobalStyle />
                <Provider store={store}>
                    <Navbar />
                    <Component {...pageProps} />
                </Provider>
            </>
        );
    }
}

export default withReduxStore(MyApp);
