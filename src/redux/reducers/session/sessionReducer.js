import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
  } from "../../actions/session/sessionActions";
  
  const _nullUser = Object.freeze({
    logged_in: false,
    user: null
  });
  
  const sessionReducer = (initialState = _nullUser, action) => {
    Object.freeze(initialState);
  
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return { logged_in: action.logged_in, user: action.user};
      case RECEIVE_SESSION_ERRORS:
        return { errors: action.errors}
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      default:
        return initialState;
    }
  };
  
  export default sessionReducer;