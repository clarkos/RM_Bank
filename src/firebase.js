// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "Firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2icmMEm7509d5W6yGQyr2mCsV9r2uT4o",
  authDomain: "bankrickymorty.firebaseapp.com",
  projectId: "bankrickymorty",
  storageBucket: "bankrickymorty.appspot.com",
  messagingSenderId: "332285203840",
  appId: "1:332285203840:web:cecb268e0429bd726f5d65"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);