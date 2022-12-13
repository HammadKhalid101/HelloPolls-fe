import $ from 'jquery';

const apiURL = process.env.REACT_APP_RAILS_API_URL

export const getAllVotes = () => {
    return $.ajax({
      method: "GET",
      url: `${apiURL}/api/votes`,
    });
};
  
export const getOneVote = (voteId) => {
    return $.ajax({
      method: "GET",
      url: `${process.env.REACT_APP_RAILS_API_URL}/api/votes/${voteId}`,
    });
  };

export const createVote = (voteData) => {
  return $.ajax({
    method: "POST",
    url: `${apiURL}/api/votes`,
    data: { voteData },
  });
};

export const deleteVote = (voteId) => {
  return $.ajax({
    method: "DELETE",
    url: `${apiURL}/api/votes/${voteId}`,
  });
};