/** 
 * Thinking in React
 * 1. 将设计稿划分组件层级
 *  - Button { children, variant }
 *  - Header
 *      - Logo
 *      - Lavigation
 *      - Authentication
 *          - LogIn
 *          - SignUp
 * 2. 静态版本
*/

import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication/Authentication";
import Logo from "./Logo";
import Navigation from './Navitgation';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 80px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
`;

const Header = () => (
    <Container>
        <Logo />
        <Navigation />
        <Authentication />
    </Container>
);

export default Header;