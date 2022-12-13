import $ from 'jquery';

const apiURL = process.env.REACT_APP_RAILS_API_URL

export const getPollVoteOptions = (pollId) => {
    return $.ajax({
      method: "GET",
      url: `${apiURL}/api/poll_options`,
      data: {vote_option: {poll_id: pollId}}
    });
};
  
export const getOneVoteOption = (voteOptionId) => {
    return $.ajax({
      method: "GET",
      url: `${process.env.REACT_APP_RAILS_API_URL}/api/vote_options/${voteOptionId}`,
    });
  };

export const createVoteOption = (vote_option) => {
  return $.ajax({
    method: "POST",
    url: `${apiURL}/api/vote_options`,
    data: { vote_option },
  });
};

export const deleteVoteOption = (voteOptionId) => {
  return $.ajax({
    method: "DELETE",
    url: `${apiURL}/api/vote_options/${voteOptionId}`,
  });
};