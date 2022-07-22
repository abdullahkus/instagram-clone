// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8-XXfP1PJGuN7XcY9V2hZNJkaA0P_uGA",
  authDomain: "instagram-clone-6b746.firebaseapp.com",
  projectId: "instagram-clone-6b746",
  storageBucket: "instagram-clone-6b746.appspot.com",
  messagingSenderId: "745882316294",
  appId: "1:745882316294:web:7e2f7be68c402ae66e5d87",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };