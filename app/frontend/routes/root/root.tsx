import React from 'react';
import { Link } from 'react-router-dom';
import { FlowLayout } from '../../reusable-components/flow-layout/flow-layout.tsx';

export function Root() {
  return (
    <FlowLayout>
      <Link to="/signup/account-selection" className="text-xl flex justify-self-start mt-7">
        Get started
      </Link>
    </FlowLayout>
  );
}
