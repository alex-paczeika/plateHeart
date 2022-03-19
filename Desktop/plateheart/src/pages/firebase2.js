import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { a } from "react-spring";

const firebaseConfig = {
    apiKey: "AIzaSyCHxJjb_PazDXXKMrgCZOjeSgBmMGwNd1k",
    authDomain: "plateheart-170b5.firebaseapp.com",
    databaseURL: "https://plateheart-170b5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "plateheart-170b5",
    storageBucket: "plateheart-170b5.appspot.com",
    messagingSenderId: "406068515284",
    appId: "1:406068515284:web:87ca6b187e248a1a95c641",
    measurementId: "G-Z3N5D5P2HN"
};



export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);
