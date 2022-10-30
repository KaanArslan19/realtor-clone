// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcXO4AqbUdeamtksdkcFgzOtV1FAAoxUU",
  authDomain: "realtor-clone-react-f8a6b.firebaseapp.com",
  projectId: "realtor-clone-react-f8a6b",
  storageBucket: "realtor-clone-react-f8a6b.appspot.com",
  messagingSenderId: "84839063174",
  appId: "1:84839063174:web:83dc39109d2cbb919dbb07"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();