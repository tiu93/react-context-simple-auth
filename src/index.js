import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import UserProvider from 'context/UserProvider';

ReactDOM.render(
  <>
    <React.StrictMode>
      <UserProvider>
        <Routes />
      </UserProvider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
