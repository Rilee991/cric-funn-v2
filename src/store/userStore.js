import axios from "axios";
import { atom, selector } from "recoil";

export const getProducts = selector({
    key: "getproducts",
    get: async () => {
        try {
            const resp = await axios("https://fakestoreapi.com/products");
            
            return { code: 200, body: resp.data };
        } catch (e) {
            console.log(e.message);
            return { code: e.code, body: e.message };
        }
    }
});

// const signUp = async (userDetails) => {
//     setLoading(true);
//     try {
//         const { username, email, password } = userDetails;
//         await auth.createUserWithEmailAndPassword(email, password);
//         auth.currentUser.updateProfile({ displayName: username });

//         const loggedInUserDetails = {
//             bets: [],
//             email,
//             isAdmin: false,
//             isDummyUser: true,
//             isEliminated: false,
//             password,
//             points: DEFAULT_START_POINTS,
//             profilePic: DEFAULT_PROFILE_IMAGE,
//             username
//         };
        
//         createUserInDb(loggedInUserDetails);
//     } catch (error) {
//         console.log(error);
//         setErrorMessage(`Sign Up failed with error code: ${error.code} and error: ${error.message}`);
//     }
//     setLoading(false);
// }
