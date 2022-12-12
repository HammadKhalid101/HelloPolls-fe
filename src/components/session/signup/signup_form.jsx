import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.processForm(newUser);
  }



  render() {
    const { first_name, last_name, username, password } = this.state;
    return (
      <div className="signup-main">
            <div>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input
                        className="signup-form-fname-input"
                        type="text"
                        value={first_name}
                        placeholder="First name"
                        onChange={this.update("first_name")}
                    />
                    <input
                        className="signup-form-lname-input"
                        type="text"
                        value={last_name}
                        placeholder="Last name"
                        onChange={this.update("last_name")}
                    />
                    <input
                        className="signup-form-fname-input"
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={this.update("username")}
                    />
                    <input
                        className="signup-form-lname-input"
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={this.update("password")}
                    />
                    <button>Sign Up</button>
                </form>
            </div>
      </div>
    );
  }
}

export default SignupForm;