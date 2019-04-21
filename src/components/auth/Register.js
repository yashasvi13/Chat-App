import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loading: false,
    usersRef: firebase.database().ref("users")
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(newUser => {
        console.log(newUser);
        newUser.user
          .updateProfile({
            displayName: this.state.firstName + " " + this.state.lastName
          })
          .then(() => {
            this.saveUser(newUser)
              .then(() => {
                console.log("user saved!!");
              })
              .catch(err => {
                console.log(err);
              });
          });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };
  saveUser = newUser => {
    return this.state.usersRef.child(newUser.user.uid).set({
      name: newUser.user.displayName
    });
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className="container">
        <br />
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="cyan-text text-darken-4">Register to chat!</h5>
          <br />
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </div>
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
            <button className="btn cyan darken-2 z-depth-0">
              Get Started!
            </button>
            <p>
              Already a user?{" "}
              <Link to="/login" className="cyan-text text-darken-4">
                Login!
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
