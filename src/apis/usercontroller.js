import axios from "axios";
import { get, remove } from "lodash";
import { db, firebase } from "../firebase/config";

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

const createSeriesInDb = async (selectedSeries, user) => {
    try {
        const resp = await axios(`https://api.cricapi.com/v1/series_info?apikey=e5dc35f0-1ff0-422f-b494-9999047708de&id=${selectedSeries.id}`);
        const matchList = get(resp, "data.data.matchList", {});

        const seriesResp = await seriesCollectionRef.doc(selectedSeries.id).get();

        if(seriesResp.exists) {
            await seriesCollectionRef.doc(selectedSeries.id).update({ bets: firebase.firestore.FieldValue.arrayUnion(user.username) });
        } else {
            await seriesCollectionRef.doc(selectedSeries.id).set({ matchList: matchList, bets: [user.username] });
        }
    } catch (e) {
        console.log(e.message);
    }
}

const subscribeSeries = async (user, setUser, selectedSeries) => {
    try {
        await updateUserInDb(user, setUser, { subscribedSeries: [ ...user.subscribedSeries, selectedSeries ] });
        await createSeriesInDb(selectedSeries, user);
    } catch (e) {
        console.log(e.message);
    }
}

const withdrawSeries = async (user, setUser, selectedSeries) => {
    try {
        remove(user.subscribedSeries, { id: selectedSeries.id });
        await updateUserInDb(user, setUser, { subscribedSeries: [ ...user.subscribedSeries ] });
        // await createSeriesInDb(selectedSeries, user);
    } catch (e) {
        console.log(e.message);
    }
}

export {
    getExistingUsers,
    createNewUserInDb,
    getUserByKey,
    updateUserInDb,
    subscribeSeries,
    withdrawSeries
};
