import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUq9VbKiEgTw2o_NCK5M_QxZcLZkydiok",
    authDomain: "plateheart-9e570.firebaseapp.com",
    databaseURL: "https://plateheart-9e570-default-rtdb.firebaseio.com",
    projectId: "plateheart-9e570",
    storageBucket: "plateheart-9e570.appspot.com",
    messagingSenderId: "805974783994",
    appId: "1:805974783994:web:edd1195749692cec325643"
};


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);