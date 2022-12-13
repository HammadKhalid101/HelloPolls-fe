import { fetchAllPolls } from "../../redux/actions/poll/pollActions";
import { connect } from "react-redux";
import PollsIndex from "./polls_index";

const mapStateToProps = (state) => {
  return {
    polls: state.polls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPolls: () => dispatch(fetchAllPolls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollsIndex);