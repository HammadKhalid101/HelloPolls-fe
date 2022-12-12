import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state); 
  }

  handleDemoUser(e) {
    this.props.processForm({
      username: "demo",
      password: "password1234",
    });
  }

  render() {
    return (
      <div className="login">
        <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="session-container">
                <div className="session-input">
                  <label className="session-label">Username</label>
                  <input
                      autoFocus
                      className="session-text"
                      type="text"
                      value={this.state.username}
                      placeholder=" "
                      onChange={this.update('username')}/>
                </div>

                <div className="session-input">
                <label className="session-label">Password</label>
                  <input
                      className="session-text"
                      type="password"
                      value={this.state.password}
                      placeholder=" "
                      onChange={this.update('password')}/>
                </div>
              <div className="login-btn-container">
                <br />
                <button className="login-button">Log In</button>
              </div>
            </div>
          </form>
          <div className="demo-signup">
            <div id="demo-button">
              <button onClick={this.handleDemoUser}>Or use a<br></br>demo account.</button>
            </div>
            <div className="signup-link">
            <p>Don't have an account? <span onClick={
                  () => this.props.history.push("/signup")
                  }>Sign Up</span></p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default LoginForm;