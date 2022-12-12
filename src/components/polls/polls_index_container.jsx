// import { fetchAllPolls } from "../../actions/polls_actions";
import { connect } from "react-redux";
import PollsIndex from "./polls_index";

const mapStateToProps = (state) => {
  return {
    // events: state.entities.polls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllPolls: () => dispatch(fetchAllPolls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollsIndex);