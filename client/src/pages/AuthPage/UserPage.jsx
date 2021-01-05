import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const UserPage = (props) => {
  return (
    <ErrorBoundary>
      <div>User page</div>
    </ErrorBoundary>
  );
};

export default UserPage;
