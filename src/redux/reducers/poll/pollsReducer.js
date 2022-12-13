import {
    RECEIVE_ALL_POLLS,
    RECEIVE_ONE_POLL,
    REMOVE_POLL,
  } from "../../actions/poll/pollActions";
  
  const pollsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_POLLS:
        return action.polls;
      case RECEIVE_ONE_POLL:
        return [action.poll];
      case REMOVE_POLL:
        return action.polls;
      default:
        return state;
    }
  };
  
  export default pollsReducer;