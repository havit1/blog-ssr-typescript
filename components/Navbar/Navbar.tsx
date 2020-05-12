import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const Navbar: React.SFC<{}> = () => {
    return (
        <Nav>
            <Link href="/">
                <NavLink>Home</NavLink>
            </Link>
            <Link href="/posts/new">
                <NavLink>New post</NavLink>
            </Link>
        </Nav>
    );
};

const Nav = styled.nav`
    height: 60px;
    width: 80%;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavLink = styled.a`
    padding: 7px 10px 7px 10px;
    color: black;
    font-weight: 700;
    font-size: 1.25em;
    letter-spacing: 3px;
    cursor: pointer;
    transition: all 500ms;

    &:hover {
        background-color: palevioletred;
        color: papayawhip;
    }
`;

export default Navbar;
