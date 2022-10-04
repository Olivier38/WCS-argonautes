import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuH5DpAbAdIbooikFBGb7c5_Z91M6e6JM",
  authDomain: "argonautes-wcs.firebaseapp.com",
  projectId: "argonautes-wcs",
  storageBucket: "argonautes-wcs.appspot.com",
  messagingSenderId: "185543920275",
  appId: "1:185543920275:web:121ff391c9af2fc168db66",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
