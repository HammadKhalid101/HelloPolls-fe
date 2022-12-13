import {
    RECEIVE_POLL_VOTE_OTIONS,
    RECEIVE_ONE_VOTE_OPTION,
    REMOVE_VOTE_OPTION,
  } from "../../actions/vote/voteOptionAction";
  
  const voteOptionsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_POLL_VOTE_OTIONS:
        return action.voteOptions;
      case RECEIVE_ONE_VOTE_OPTION:
        return action.voteOption;
      case REMOVE_VOTE_OPTION:
        return action.voteOptions;
      default:
        return state;
    }
  };
  
  export default voteOptionsReducer;