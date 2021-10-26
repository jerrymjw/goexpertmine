import React from "react";
import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
    color: initial;
    margin: 0 25px;
    letter-spacing: 1px;
`;

const Navigation = () => (
    <div>
        <Link href="/">Home</Link>
        <Link href="/">Expert</Link>
        <Link href="/">About</Link>
    </div>
);

export default Navigation;
