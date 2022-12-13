import { connect } from "react-redux";
import { deletePoll, fetchOnePoll } from "../../redux/actions/poll/pollActions";
import { createVoteOption, deleteVoteOption, fetchPollVoteOptions } from "../../redux/actions/vote/voteOptionAction";
import PollShow from "./poll_show";
  
  const mapStateToProps = (state, ownProps) => {
    return {
      pollId: ownProps.match.params.poll_id,
      polls: state.polls,
      loggedIn: state.session.logged_in,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchOnePoll: (id) => dispatch(fetchOnePoll(id)),
        deletePoll: (id) => dispatch(deletePoll(id)),
        fetchPollVoteOptions: (pollId) => dispatch(fetchPollVoteOptions(pollId)),
        createVoteOption: (data) => dispatch(createVoteOption(data)),
        deleteVoteOption: (voteOptionId) => dispatch(deleteVoteOption(voteOptionId))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PollShow);