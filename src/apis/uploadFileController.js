const { getFirebaseStorageRef } = require("../firebase/utils");

const getStorageFileLink = async (file, storagePath) => {
    const storageRef = getFirebaseStorageRef(storagePath);

    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log('Upload is ' + progress + '% done');
    });

    await uploadTask;
    const fileUrl = await uploadTask.snapshot.ref.getDownloadURL();

    return fileUrl;
}

module.exports = {
    getStorageFileLink
}
