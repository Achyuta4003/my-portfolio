// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBshOMOQL-yVKSfVnWMuwCkV3YraXXQXo",
    authDomain: "achyuta-portfolio.firebaseapp.com",
    projectId: "achyuta-portfolio",
    storageBucket: "achyuta-portfolio.appspot.com",
    messagingSenderId: "852584975640",
    appId: "1:852584975640:web:27e5515f8bf423b038226d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore() 