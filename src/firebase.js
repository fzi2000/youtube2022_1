import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLtDSdbGNl5FUvdq0JxxdM8Zqj9KvYXk4",
  authDomain: "chat-456a1.firebaseapp.com",
  projectId: "chat-456a1",
  storageBucket: "chat-456a1.appspot.com",
  messagingSenderId: "9946743897",
  appId: "1:9946743897:web:69e1ae11cfb27a65419d48",
  measurementId: "G-NQ21DE2HLL",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
