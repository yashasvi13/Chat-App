import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(signedInUser => {
        console.log(signedInUser);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <br />
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="green-text text-darken-3">Login</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <div className="input-field">
            <br />
            <button className="btn green lighten-1 z-depth-0">
              <Link className="white-text" to="/">
                Login
              </Link>
            </button>
            <p>
              Already a user?{" "}
              <Link to="/login" className="green-text lighten-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
