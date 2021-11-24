import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';

const Wrapper = styled.div`
  display: inline-block;
  & ~ & {
    margin-left: 1rem;
  }
`;

const Authentication = () => (
  <div>
    <Wrapper>
      <Button variant="secondary">Sign up</Button>
    </Wrapper>
    <Wrapper>
      <Button variant="primary">Log in</Button>
    </Wrapper>
  </div>
);

export default Authentication;
