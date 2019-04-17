import React from "react";
// import chatActions from "../../store/actions/chatActions";
// import NewMessageForm from "../form/NewMessageForm";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
const Message = props => {
  const { message, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="message section">
      <div className="card z-depth-0 msg">
        <div className="card-content grey-text text-darken-3">
          <span className="content">{message}</span>
          <br />

          <span className="content">Message</span>
          <br />
          <span className="content">Message</span>
          <br />

          <span className="content">Message</span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    message: state.firebase.message
  };
  console.log(state);
};
export default connect(mapStateToProps)(Message);
