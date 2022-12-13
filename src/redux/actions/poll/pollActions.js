import * as PollAPIUtil from "../../api/polls_api";

export const RECEIVE_ONE_POLL = "RECEIVE_ONE_POLL";
export const RECEIVE_ALL_POLLS = "RECEIVE_ALL_POLLS";
export const RECEIVE_POLL_ERRORS = "RECEIVE_POLL_ERRORS";
export const CLEAR_POLL_ERRORS = "CLEAR_POLL_ERRORS";
export const REMOVE_POLL = "REMOVE_POLL";

const receiveOnePoll = (poll) => {
  return {
    type: RECEIVE_ONE_POLL,
    poll,
  };
};

const receiveAllPolls = (polls) => {
  return {
    type: RECEIVE_ALL_POLLS,
    polls,
  };
};

const removePoll = (polls) => {
  return {
    type: REMOVE_POLL,
    polls,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_POLL_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_POLL_ERRORS,
  };
};

export const fetchOnePoll = (pollId) => (dispatch) => {
  return PollAPIUtil.getOnePoll(pollId).then(
    (poll) => dispatch(receiveOnePoll(poll)),
    (err) => {
      console.log(err.responseJSON);
    }
  );
};

export const fetchAllPolls = () => (dispatch) => {
  return PollAPIUtil.getAllPolls().then(
    (polls) => dispatch(receiveAllPolls(polls)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createPoll = (formData) => (dispatch) => {
  return PollAPIUtil.createPoll(formData).then(
    (poll) => dispatch(receiveOnePoll(poll)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deletePoll = (pollId) => (dispatch) => {
  return PollAPIUtil.deletePoll(pollId).then(
    (res) => dispatch(removePoll(res)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};