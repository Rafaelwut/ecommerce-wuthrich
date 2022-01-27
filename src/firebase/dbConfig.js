// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDExqfdIC7nsfm7pVok3fhL8xWdcLs2HAk",
  authDomain: "malvindesing.firebaseapp.com",
  projectId: "malvindesing",
  storageBucket: "malvindesing.appspot.com",
  messagingSenderId: "750212772955",
  appId: "1:750212772955:web:69c29c6e122c0492b8fb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const getFirestoreApp = () =>{
    return app
}