import moment from "moment";
import firebase from "firebase";

export const getProfileDateFromFirebase = (firebaseTime) => {
    return moment.unix(firebaseTime["seconds"]).format("MMM YYYY");
}

export const getFirebaseTimestamp = (date) => {
    return firebase.default.firestore.Timestamp.fromDate(date);
}
