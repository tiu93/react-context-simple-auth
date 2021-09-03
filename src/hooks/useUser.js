import { useContext } from 'react';
import UserContext from 'context/UserContext';

const useUser = () => {
  const context = useContext(UserContext);

  const {
    login,
    logout,
    state: { userCredentials, userInfo },
  } = context;

  return {
    userInfo,
    userCredentials,
    login,
    logout,
  };
};

export default useUser;
