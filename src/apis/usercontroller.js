const { db } = require("../firebase/config");

const usersCollectionRef = db.collection("users");

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

module.exports = {
    getExistingUsers,
    createNewUserInDb,
    getUserByKey,
    updateUserInDb
};
