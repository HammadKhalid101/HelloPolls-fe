import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { deletePoll, fetchOnePoll } from "../../redux/actions/poll/pollActions";
import { createVoteOption, deleteVoteOption, fetchPollVoteOptions } from "../../redux/actions/vote/voteOptionAction";
import { createVote, deleteVote } from "../../redux/actions/vote/voteAction";

const PollShow = () => {
  const dispatch = useDispatch()
  const id = useParams();
  const history = useHistory()
  const pollFromState = useSelector((state) => state.polls)
  const pollVoteOptions = useSelector((state) => state.voteOptions)
  const {logged_in, user} = useSelector((state) => state.session)
  const isPollOwner = logged_in && user.id === pollFromState[0].user_id
  const [createVoteOptionData, setCreateVoteOptionData] = useState({
    title: "",
    poll_id: '',
  });

  useEffect(() => {
    dispatch(fetchOnePoll(id.poll_id))
    dispatch(fetchPollVoteOptions(id.poll_id))
  }, [dispatch])

  const handlePollDelete = (pollId) => {
    dispatch(deletePoll(pollId))
    history.push('/polls')
  }

  const destoryPoll = (pollId) => {
    if (isPollOwner) {
      return(
        <button onClick={() => handlePollDelete(pollId)}>Delete Poll</button>
      )
    }
  }

  const destroyVoteOption = (optionId) => {
    if (isPollOwner) {
      return(
        // <button onClick={dispatch(deleteVoteOption(optionId))}>Delete Option</button>
        <button onClick={() => { dispatch(deleteVoteOption(optionId)) }}>Delete</button>
      )
    }
  }

  const handleChangeForCreateOption = (event) => {
    setCreateVoteOptionData({ ...createVoteOptionData, [event.target.name]: event.target.value });
  };

  const handleCreateOption = (event) => {
    event.preventDefault();
		dispatch(createVoteOption({
			title: createVoteOptionData.title,
			poll_id: id.poll_id
		}))
    document.getElementById('vote-title').value = ''
  };

  const createOption = () => {
    if (isPollOwner) {
      return(
        <div className="create-vote-option">
          <form className="vote-option-form" onSubmit={handleCreateOption}>
            <input type="title" name="title" id="vote-title" onChange={handleChangeForCreateOption}/>
            <br />
            <button >Create Vote Option</button>
          </form>
        </div>
      )
    }
  }

  const renderVoteOptions = () => {
    return (
      <div>
        <div className='poll-index-container'>
          {pollVoteOptions.map((option) => (
        <div key={option.id}>
          Vote Option: {option.title} {destroyVoteOption(option.id)}
        </div>
        ))}
        </div>
        <br />
        {createOption()}
      </div>
    )
  }

    return (
      <div>Poll Show
        <div>
          Poll Topic: {pollFromState[0].topic}
          <br />
          User_id: {pollFromState[0].user_id}
          <br />
          <br />
          {renderVoteOptions()}
          {/* <div className='poll-index-container'>
                {pollVoteOptions.map((option) => (
              <div key={option.id}>
                Vote Option: {option.title} {destroyVoteOption(option.id)}
              </div>
            ))}
          </div>
          <br />
          {createOption()} */}
        </div>
          {destoryPoll(pollFromState[0].id)}
      </div>
    );
}

export default PollShow;