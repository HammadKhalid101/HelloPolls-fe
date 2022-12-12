import { connect } from "react-redux";
import { login, clearErrors } from "../../../redux/actions/session/sessionActions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    // errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (currentUser) => dispatch(login(currentUser)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);