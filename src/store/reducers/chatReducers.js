const initState = {};
const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "START_CHAT":
      console.log("start chat success");
      return state;
    case "CHAT_SEND_ERROR":
      console.log("chat send error");
      return state;
    default:
      return state;
  }
};
export default chatReducer;
