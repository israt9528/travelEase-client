// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLl7pGaYi-RFkFbfZhjHdIuoH1qOiFROw",
  authDomain: "travel-ease-eaca9.firebaseapp.com",
  projectId: "travel-ease-eaca9",
  storageBucket: "travel-ease-eaca9.firebasestorage.app",
  messagingSenderId: "558016244579",
  appId: "1:558016244579:web:140a6635e3db0a113d8156",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
