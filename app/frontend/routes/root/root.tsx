import React from 'react';
import {Button} from "../../reusable-components/button/button.tsx";
import styled from "styled-components";
import {Card} from "../../reusable-components/card/card.tsx";

const Container = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    width: 50vw;
`;

const Body = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 15px;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
`

export function Root() {
  return (
      <Container>
          <Card title="Welcome To Wealthfront">
              <Body>
                  <Button href="/signup/account-selection" >
                      Select a new account
                  </Button>
                  <Button href="/create-account">
                      Create a new account
                  </Button>
              </Body>
          </Card>
      </Container>
  );
}
