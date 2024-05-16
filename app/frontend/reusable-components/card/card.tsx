import React, { ReactNode } from 'react';
import styled from "styled-components";
import {Logo} from "../logo/logo.tsx";

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

const Section = styled.section`
    padding: 40px;
    min-height: 400px;
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgb(226 232 240);
    display: flex;
    flex-direction: column;
`

const Header = styled.h1`
    margin: 20px 0;
    font-size: 30px;
    line-height: 36px;
    align-self: center;
    color: black;
`

const Description = styled.p`
    color: hsla(243,30%,13%,.63);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
`

export function Card({ children, title, description }: Props) {
  return (
      <Section className="shadow-card">
        <Logo/>
        <Header>{title}</Header>
          {description && <Description>{description}</Description>}
        {children}
      </Section>
  );
}
