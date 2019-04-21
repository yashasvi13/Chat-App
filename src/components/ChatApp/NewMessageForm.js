import React, { Component } from "react";
import firebase from "../../firebase";

class NewMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
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
      .child("messages")
      .on("value", message => {
        if (message.val()) {
          this.setState({
            list: Object.values(message.val())
          });
        }
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const msgObj = {
      user: this.state.user.email,
      message: this.state.message
    };
    const db = firebase.database();
    db.ref()
      .child("messages")
      .push(msgObj);

    this.setState({
      message: ""
    });
  };
  paintAllChats = () => {
    return (this.state.list || []).map((msg, index) => {
      return (
        <div className="card" key={`message-${index}`}>
          <span className="card grey-text darken-4 users">{msg.user}</span>
          <br />

          <span className="card-content">{msg.message}</span>
          <br />
        </div>
      );
    });
  };
  render() {
    console.log("this.state", this.state);
    return (
      <div className="row card container">
        <br />
        <div className="card-title center">Message Window</div>
        <div className="mains">{this.paintAllChats()}</div>
        <form
          className="col s12 bottom input-field card-action"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            id="message"
            value={this.state.message}
            placeholder="New message..."
            onChange={this.handleChange}
          />

          <button className="btn send cyan darken-2 " type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
