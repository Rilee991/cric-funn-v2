const { db } = require("../firebase/config");

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

const createNewUserInDb = async (user) => {
    try {
        const userResp = await usersCollectionRef.doc(user.username).set(user);

        return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const getUserByKey = async (key, value) => {
    const userSnapshot = await usersCollectionRef.where(key, "==", value).get();
    
    return userSnapshot;
}

const updateUserInDb = async (username, updatedKeys) => {
    try {
        const userResp = await usersCollectionRef.doc(username).update({ ...updatedKeys });

        return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const createSeriesInDb = async (seriesId) => {
    try {
        const userResp = await seriesCollectionRef.doc(seriesId).set({ seriesId,  });

        return userResp;
    } catch (e) {
        console.log(e.message);
    }
}

const subscribeSeries = async (selectedSeries) => {
    try {
        await updateUserInDb(username, { subscribedSeries: selectedSeries });
        await createSeriesInDb(seriesId); 
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    getExistingUsers,
    createNewUserInDb,
    getUserByKey,
    updateUserInDb,
    subscribeSeries
};
