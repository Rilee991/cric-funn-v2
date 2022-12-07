import moment from "moment";

export const getProfileDateFromFirebase = (firebaseTime) => {
    return moment.unix(firebaseTime["seconds"]).format("MMM YYYY");
}
