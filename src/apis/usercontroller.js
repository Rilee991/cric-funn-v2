import axios from "axios";
import { get } from "lodash";
import { db } from "../firebase/config";

const usersCollectionRef = db.collection("users");
const seriesCollectionRef = db.collection("series");

const getExistingUsers = async () => {
    try {
        const usersData = await (await usersCollectionRef.get()).docs;
        const formattedUsersData = usersData.map(eachUser => eachUser.data());

        return formattedUsersData;
    } catch (e) {
        console.log(e.message);
    }
}

const createNewUserInDb = async (user, setUser) => {
    try {
        const userResp = await usersCollectionRef.doc(user.username).set(user);
        setUser(user);

        return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const getUserByKey = async (key, value) => {
    const userSnapshot = await usersCollectionRef.where(key, "==", value).get();
    
    return userSnapshot;
}

const updateUserInDb = async (user, setUser, updatedKeys) => {
    try {
        const userResp = await usersCollectionRef.doc(user.username).update({ ...updatedKeys });
        setUser({ ...user, ...updatedKeys });

        return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const createSeriesInDb = async (selectedSeries) => {
    try {
        const resp = await axios(`https://api.cricapi.com/v1/series_info?apikey=e5dc35f0-1ff0-422f-b494-9999047708de&id=${selectedSeries.id}`);
        const seriesDetails = get(resp, "data.data", {});
        console.log(seriesDetails);
        // const userResp = await seriesCollectionRef.doc(selectedSeries.id).set({ ...seriesDetails });

        // return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const subscribeSeries = async (user, setUser, selectedSeries) => {
    try {
        // await updateUserInDb(user, setUser, { subscribedSeries: [ ...user.subscribeSeries, selectedSeries ] });
        await createSeriesInDb(selectedSeries);
    } catch (e) {
        console.log(e.message);
    }
}

export {
    getExistingUsers,
    createNewUserInDb,
    getUserByKey,
    updateUserInDb,
    subscribeSeries
};
