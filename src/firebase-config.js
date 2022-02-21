import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Replace the following with your app's Firebase project configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCANOKPtcRb8fdOt6i9bWhz0ZZl2Xlse7s",
    authDomain: "pentavalue-2a41c.firebaseapp.com",
    databaseURL: "https://pentavalue-2a41c-default-rtdb.firebaseio.com",
    projectId: "pentavalue-2a41c",
    storageBucket: "pentavalue-2a41c.appspot.com",
    messagingSenderId: "152985368074",
    appId: "1:152985368074:web:65e25e1d64b83fc4f951f3"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const storage = getStorage(app)