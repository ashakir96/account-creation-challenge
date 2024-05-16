import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

interface Props {
  type?: 'button' | 'submit';
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 12px 24px;
  background: hsla(244,49%,49%,1);
  color: white;
  border-radius: 10px;
  text-align: center;
  margin-top: 16px !important;
  
  &:hover {
    background: rgb(250, 245, 255);
    color: hsla(244,49%,49%,1);
    border: 1px solid hsla(244,49%,49%,1);
  }
`;

export function Button({ href, children, type, onClick }: Props) {
  if (href) {
    return (
        <Link to={href}>
            <StyledButton>
                {children}
            </StyledButton>
        </Link>
    );
  }

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
