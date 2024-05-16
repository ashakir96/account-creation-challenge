import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root/root.tsx';
import { AccountSelection } from './routes/signup/account-selection/account-selection.tsx';
import { CreateUser } from './routes/signup/create-user/create-user.tsx';
import { Deposit } from './routes/signup/deposit/deposit.tsx';
import { JointAccess } from './routes/signup/joint-access/joint-access.tsx';
import { StockRestrictions } from './routes/signup/stock-restrictions/stock-restrictions.tsx';
import {CreateAccount} from "./routes/create-account/create-account.tsx";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup/account-selection',
    element: <AccountSelection />,
  },
  {
    path: '/signup/create-user',
    element: <CreateUser />,
  },
  {
    path: '/signup/joint-access',
    element: <JointAccess />,
  },
  {
    path: '/signup/stock-restrictions',
    element: <StockRestrictions />,
  },
  {
    path: '/signup/deposit',
    element: <Deposit />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

const FullScreenContainer = styled.main`
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Router() {
  return (
    <FullScreenContainer>
      <Body>
        <RouterProvider router={router} />
      </Body>
    </FullScreenContainer>
  );
}
