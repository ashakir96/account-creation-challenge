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

export function FlowLayout({ children }: Props) {
  return (
    <Container>
      <div className="w-full text-right mb-5">
        <Link to="/" reloadDocument>
          Logout
        </Link>
      </div>
      {children}
    </Container>
  );
}
