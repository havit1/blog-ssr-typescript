import React from 'react';
import initializeStore from '../redux/store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getOrCreateStore(initialState) {
    // Always make a new store if server, otherwise state is shared between requests
    if (typeof window === 'undefined') {
        return initializeStore(initialState);
    }

    // Create store if unavailable on the client and set it on the window object
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (App) => {
    return class AppWithRedux extends React.Component {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        static async getInitialProps(appContext) {
            // Get or Create the store with `undefined` as initialState
            // This allows you to set a custom default initialState
            const store = getOrCreateStore();

            // Provide the store to getInitialProps of pages
            appContext.ctx.store = store;

            return {
                ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
                initialReduxState: store.getState(),
            };
        }

        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        render() {
            const { initialReduxState } = this.props;
            return <App {...this.props} store={getOrCreateStore(initialReduxState)} />;
        }
    };
};
