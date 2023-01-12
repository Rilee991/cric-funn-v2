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
        // await updateUserInDb(username, { subscribedSeries: selectedSeries });
        // await createSeriesInDb(seriesId); 
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
