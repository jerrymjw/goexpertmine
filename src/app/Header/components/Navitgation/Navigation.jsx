import React from 'react';
import styled from 'styled-components';
import Link from '../../../../components/Link';

const Nav = styled.nav`
  display: flex;
`;

const Item = styled.div`
  margin: 0 25px;
`;

const Navigation = () => (
  <Nav>
    <Item>
      <Link href="/">Home</Link>
    </Item>
    <Item>
      <Link href="/">Expert</Link>
    </Item>
    <Item>
      <Link href="/">About</Link>
    </Item>
  </Nav>
);

export default Navigation;
