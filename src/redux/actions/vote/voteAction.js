import * as VotesAPIUtil from "../../api/votes_api";

export const RECEIVE_VOTE_ERRORS = "RECEIVE_VOTE_ERRORS";
export const CLEAR_VOTE_ERRORS = "CLEAR_VOTE_ERRORS";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const RECEIVE_ONE_VOTE = 'RECEIVE_ONE_VOTE';
export const RECEIVE_ALL_VOTES = 'RECEIVE_ALL_VOTES';

const receiveOneVote = (vote) => {
  return {
    type: RECEIVE_ONE_VOTE,
    vote,
  };
};

const receiveAllVotes = (votes) => {
    return {
        type: RECEIVE_ALL_VOTES,
        votes,
    };
}

const removeVote = (data) => {
  return {
    type: REMOVE_VOTE,
    data,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_VOTE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_VOTE_ERRORS,
  };
};

export const fetchOneVote = (voteId) => (dispatch) => {
  return VotesAPIUtil.getOneVote(voteId).then(
    (vote) => dispatch(receiveOneVote(vote)),
    (err) => {
      console.log(err.responseJSON);
    }
  );
};

export const fetchAllVotes = () => (dispatch) => {
  return VotesAPIUtil.getAllVotes().then(
    (votes) => dispatch(receiveAllVotes(votes)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createVote = (formData) => (dispatch) => {
  return VotesAPIUtil.createVote(formData).then(
    (vote) => dispatch(receiveOneVote(vote)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteVote = (voteId) => (dispatch) => {
  return VotesAPIUtil.deleteVote(voteId).then(
    (res) => dispatch(removeVote(res)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};