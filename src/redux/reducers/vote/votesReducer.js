import {
    RECEIVE_ALL_VOTES,
    RECEIVE_ONE_VOTE,
    REMOVE_VOTE,
  } from "../../actions/vote/voteAction";
  
  const votesReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_VOTES:
        return action.votes;
      case RECEIVE_ONE_VOTE:
        return [action.vote];
      case REMOVE_VOTE:
        return [];
      default:
        return state;
    }
  };
  
  export default votesReducer;