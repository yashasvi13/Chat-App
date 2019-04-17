import React, { Component } from "react";
import { connect } from "react-redux";
import { startChat } from "../../store/actions/chatActions";
import { Redirect } from "react-router-dom";
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
    this.props.startChat({ ...this.state.message });
    this.setState({
      message: ""
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
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
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
    // message: state.firebase.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startChat: chat => dispatch(startChat(chat))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm);
