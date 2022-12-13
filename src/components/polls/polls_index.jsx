import React, { useEffect} from 'react';
import PollItem from './poll_item';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAllPolls } from '../../redux/actions/poll/pollActions';

const PollsIndex = () => {
    const dispatch = useDispatch()
    const pollsFromState = useSelector((state) => state.polls)

    useEffect(() => {
        dispatch(fetchAllPolls())
    }, [dispatch])

    return (
        <div>
            <h1>Browse Polls</h1>
            <div className='poll-index-container'>
                {pollsFromState.map((poll) => (
            <PollItem poll={poll} key={poll.id}></PollItem>
          ))}
            </div>
        </div>
    )
}

export default PollsIndex;