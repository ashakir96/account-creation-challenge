import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.div`
    height: 100%;
    margin: 20px auto 0 auto;
    max-width: 1000px;
`

const Header = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 20px;
`;

const Logout = styled(Link)`
    padding: 4px 12px;
    border-radius: 4px;
    &:hover {
        background: rgb(250, 245, 255);
        color: hsla(244,49%,49%,1);
        border: 1px solid hsla(244,49%,49%,1);
    }
`

export function FlowLayout({ children }: Props) {
  return (
    <Container>
      <Header>
        <Logout to="/" reloadDocument>
          Logout
        </Logout>
      </Header>
      {children}
    </Container>
  );
}
