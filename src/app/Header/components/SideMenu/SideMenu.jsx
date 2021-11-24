import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Link from '../../../../components/Link/Link';

const NakedButton = styled.button`
  background: transparent;
  font-size: 1rem;
  padding: 0;
  border: 0;
  outline: 0;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
`;

const Heading = styled.div`
  position: relative;
  margin: 40px 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 16px 20px;
  border-bottom: 1px solid #E3E3E3;
`;

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <Menu>
        <Heading>
          <Title>
            <FontAwesomeIcon icon={faBars} />
            {' '}
            Menu
          </Title>
          <Close>
            <NakedButton onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon title="Close Menu" icon={faTimes} />
            </NakedButton>
          </Close>
        </Heading>
        <List>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/">Expert</Link>
          </Item>
          <Item>
            <Link href="/">About</Link>
          </Item>
        </List>
      </Menu>
    );
  }
  return (
    <>
      <NakedButton onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon title="Open Menu" icon={faBars} />
      </NakedButton>
    </>
  );
};

export default SideMenu;
