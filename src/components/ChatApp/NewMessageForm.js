import React, { Component } from "react";

class NewMessageForm extends Component {
  state = {
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      message: ""
    });
  };
  render() {
    return (
      <div className="row">
        <form
          className="col s12 bottom input-field"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            id="message"
            value={this.state.message}
            placeholder="New message..."
            onChange={this.handleChange}
          />

          <button className="btn send" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
