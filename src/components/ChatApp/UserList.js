import React, { Component } from "react";
import firebase from "../../firebase";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    const user = firebase.auth().currentUser;
    const obj = {};
    if (user != null) {
      obj.name = user.displayName;
      obj.email = user.email;
      obj.uid = user.uid;
    }
    this.setState({ user: obj });

    firebase
      .database()
      .ref()
      .child("users")
      .on("value", name => {
        if (name.val()) {
          this.setState({
            list: Object.values(name.val())
          });
        }
      });
  }
  paintAllUsers = () => {
    return (this.state.list || []).map((usr, index) => {
      return (
        <div className="card" key={`name-${index}`}>
          {/* <span className="card-title">Contacts</span> */}
          <span className="card green-text">{usr.name}</span>
          <br />
        </div>
      );
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const usrObj = {
      user: this.state.user.displayName
    };
    const db = firebase.database();
    db.ref()
      .child("messages")
      .push(usrObj);

    this.setState({
      user: ""
    });
  };
  render() {
    return (
      <div className="card">
        <br />
        <div className="card-title green-text">Contacts</div>
        <span className="card-content">{this.paintAllUsers()}</span>
      </div>
    );
  }
}

export default UserList;
