import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJw5v7ymEmd97GdB2Gm2_mTAOzMvCLn50",
    authDomain: "clone-267e4.firebaseapp.com",
    projectId: "clone-267e4",
    storageBucket: "clone-267e4.appspot.com",
    messagingSenderId: "750354849762",
    appId: "1:750354849762:web:3f2feac86b1292e507e3bb"
};

const app = initializeApp(firebaseConfig);  /* initializing app */

const db = getFirestore(app); /* firestore */
const auth = getAuth(); /* authorization */

export { auth, db }