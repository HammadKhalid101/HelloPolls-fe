import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../../redux/actions/session/sessionActions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
    return {
        // errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (newUser) => dispatch(signup(newUser)),
        // demoUser: (demoUser) => dispatch(login(demoUser)),
        // clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);