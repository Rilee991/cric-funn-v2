import { storage } from "./config"

export const getFirebaseStorageRef = (refType) => {
    const ref = storage.ref().child(`cric-funn-v2/${refType}`);

    return ref;
}
