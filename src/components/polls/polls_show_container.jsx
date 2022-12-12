// import {
//     fetchOnePoll,
//     addPollOption,
//     addVoteToPoll,
//     deletePoll,
//   } from "../../actions/poll_actions";
  import { connect } from "react-redux";
  import PollShow from "./poll_show";
  
  const mapStateToProps = (state, ownProps) => {
    return {
    //   pollId: ownProps.match.params.poll_id,
    //   polls: state.entities.polls,
    //   currentUser: state.session.user,
    //   loggedIn: state.session.loggedIn,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    //   fetchOnePoll: (id) => dispatch(fetchOnePoll(id)),
    //   addVoteToPoll: (pollID, data) => dispatch(addVoteToPoll(pollId, data)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PollShow);