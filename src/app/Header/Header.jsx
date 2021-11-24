/**
 * Thinking in React
 * 1. 将设计稿划分组件层级
 *  - Button { children, variant }
 *  - Header
 *      - Logo
 *      - Navigation
 *      - Authentication
 *          - LogIn
 *          - SignUp
 * 2. 静态版本
*/

import React from 'react';
import styled from 'styled-components';
import Authentication from './components/Authentication';
import Logo from './components/Logo';
import Navigation from './components/Navitgation';
import Search from './components/Search';
import SideMenu from './components/SideMenu';

const MobileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 12px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

const DesktopContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 22px 80px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);

    display: none;
    @media only screen and (min-width: 768px) {
        display: flex;
    }
`;

const Header = () => (
  <>
    <MobileContainer>
      <SideMenu />
      <Search />
    </MobileContainer>
    <DesktopContainer>
      <Logo />
      <Navigation />
      <Authentication />
    </DesktopContainer>
  </>
);

export default Header;
