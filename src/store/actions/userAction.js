export const User = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    const firestore = getFirestore();

    return firestore
      .collection("users")
      .get()

      .then(snapshot => {
        const users = [];
        snapshot.forEach(doc => {
          users.push(doc.data().firstName + " " + doc.data().lastName);
          // console.log(doc.id, "=>", doc.data());
        });
        console.log(users);
        // console.log(snapshot);
      });
  };
};
