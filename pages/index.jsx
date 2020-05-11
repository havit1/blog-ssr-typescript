// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class Index extends PureComponent {
    static getInitialProps({ store, req }) {
        return {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <>
                <h2>index</h2>
            </>
        );
    }
}

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(Index);
