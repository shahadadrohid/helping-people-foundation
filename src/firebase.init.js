// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjD6jEdYB8yIzfBIUAFkjzFT19E5zWkPg",
    authDomain: "helping-people-foundatio-8b59a.firebaseapp.com",
    projectId: "helping-people-foundatio-8b59a",
    storageBucket: "helping-people-foundatio-8b59a.appspot.com",
    messagingSenderId: "951943604431",
    appId: "1:951943604431:web:2b88aadc7235c2ca2e2fba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;