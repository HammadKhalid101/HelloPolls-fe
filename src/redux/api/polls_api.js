import $ from 'jquery';

const apiURL = process.env.REACT_APP_RAILS_API_URL

export const getAllPolls = () => {
  return $.ajax({
    method: "GET",
    url: `${apiURL}/api/polls`,
  });
};

export const getOnePoll = (pollId) => {
    return $.ajax({
      method: "GET",
      url: `${process.env.REACT_APP_RAILS_API_URL}/api/polls/${pollId}`,
    });
  };

export const createPoll = (pollData) => {
  return $.ajax({
    method: "POST",
    url: `${apiURL}/api/polls`,
    data: { pollData },
  });
};

export const deletePoll = (pollId) => {
  return $.ajax({
    method: "DELETE",
    url: `${apiURL}/api/polls/${pollId}`,
  });
};