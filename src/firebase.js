import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQEnzwjOKx7zCfrgTmKVLjaewJW1OcV1I",
  authDomain: "chat-57183.firebaseapp.com",
  projectId: "chat-57183",
  storageBucket: "chat-57183.appspot.com",
  messagingSenderId: "249532506432",
  appId: "1:249532506432:web:d5f65dcbfcdcec8d94daa5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
