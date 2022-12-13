import * as VoteOptionsAPIUtil from "../../api/vote_options_api";

export const RECEIVE_VOTE_OPTION_ERRORS = "RECEIVE_VOTE_OPTION_ERRORS";
export const CLEAR_VOTE_OPTION_ERRORS = "CLEAR_VOTE_OPTION_ERRORS";
export const REMOVE_VOTE_OPTION = "REMOVE_VOTE_OPTION";
export const RECEIVE_ONE_VOTE_OPTION = 'RECEIVE_ONE_VOTE_OPTION';
export const RECEIVE_POLL_VOTE_OTIONS = 'RECEIVE_POLL_VOTE_OTIONS';

const receiveOneVoteOption = (voteOption) => {
  return {
    type: RECEIVE_ONE_VOTE_OPTION,
    voteOption,
  };
};

const receivePollVoteOptions = (voteOptions) => {
    return {
        type: RECEIVE_POLL_VOTE_OTIONS,
        voteOptions,
    };
}

const removeVoteOption = (voteOptions) => {
  return {
    type: REMOVE_VOTE_OPTION,
    voteOptions,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_VOTE_OPTION_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_VOTE_OPTION_ERRORS,
  };
};

export const fetchOneVoteOption = (voteOptionId) => (dispatch) => {
  return VoteOptionsAPIUtil.getOneVoteOption(voteOptionId).then(
    (voteOption) => dispatch(receiveOneVoteOption(voteOption)),
    (err) => {
      console.log(err.responseJSON);
    }
  );
};

export const fetchPollVoteOptions = (pollId) => (dispatch) => {
  return VoteOptionsAPIUtil.getPollVoteOptions(pollId).then(
    (pollVoteOptions) => dispatch(receivePollVoteOptions(pollVoteOptions)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createVoteOption = (formData) => (dispatch) => {
  return VoteOptionsAPIUtil.createVoteOption(formData).then(
    (voteOption) => dispatch(receiveOneVoteOption(voteOption)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteVoteOption = (voteOptionId) => (dispatch) => {
  return VoteOptionsAPIUtil.deleteVoteOption(voteOptionId).then(
    (res) => dispatch(removeVoteOption(res)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};