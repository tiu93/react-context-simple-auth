const UserReducer = (state, action) => {
  if (action) {
    switch (action.type) {
      case 'SET_USER_FIELDS':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  } else return state;
};

export default UserReducer;
