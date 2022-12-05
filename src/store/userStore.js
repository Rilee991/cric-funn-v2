import axios from "axios";
import { atom, selector } from "recoil";

export const userAtom = atom({
    key: "userDetails",
    default: {}
});
