import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import UserReducer from 'reducers/user';
import UserContext from 'context/UserContext';
import { setToLocalStorage } from 'helpers';

const initialState = {
  userCredentials: {
    userName: 'test',
    password: 'test1',
  },
  userInfo: {
    userName: '',
  },
};

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = (username) => {
    setToLocalStorage('token', 'MyToken');
    dispatch({
      type: 'SET_USER_FIELDS',
      payload: { userInfo: { username } },
    });
  };

  const logout = () => {
    setToLocalStorage('token', '');
    dispatch({
      type: 'SET_USER_FIELDS',
      payload: { userInfo: { username: '' } },
    });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default UserProvider;
