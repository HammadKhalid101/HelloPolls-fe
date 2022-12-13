import React from "react";
import { Link, NavLink } from "react-router-dom";

const PollItem = ({ poll }) => {

  return (
    <div className="poll-item">
      <NavLink to={`/polls/${poll.id}`}>
        <h1>{poll.topic}</h1>
      </NavLink>
      <p>Poll topic: {poll.topic}</p>
    </div>
  );
};

export default PollItem;