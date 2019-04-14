export const startChat = chat => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("chat")
      .add({
        ...chat,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "START_CHAT", chat });
      })
      .catch(err => {
        dispatch({ type: "CHAT_SEND_ERROR", err });
      });
  };
};
