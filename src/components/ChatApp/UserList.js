import React, { Component } from "react";
import firebase from "../../firebase";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
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
          <span className=" grey-text users darken-4">{usr.name}</span>
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="card ">
        <br />
        <div className="card-title center">Contacts</div>
        <span className="card-content">{this.paintAllUsers()}</span>
      </div>
    );
  }
}

export default UserList;
