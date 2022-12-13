import { combineReducers } from 'redux';
import pollsReducer from './poll/pollsReducer';
import sessionReducer from './session/sessionReducer';
import voteOptionsReducer from './vote/voteOptionsReducer';
import votesReducer from './vote/votesReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    polls: pollsReducer,
    voteOptions: voteOptionsReducer,
    votes: votesReducer,
})

export default rootReducer;