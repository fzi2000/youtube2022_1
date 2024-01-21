import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkq65Ihq0D_njjx9TTeRB5QxscIwLBVzI",
  authDomain: "authentication-660ff.firebaseapp.com",
  databaseURL: "https://authentication-660ff-default-rtdb.firebaseio.com",
  projectId: "authentication-660ff",
  storageBucket: "authentication-660ff.appspot.com",
  messagingSenderId: "240675912860",
  appId: "1:240675912860:web:f218580a25066c7459c159"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
