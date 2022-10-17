import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvy1zBm2-EVuiWtnYE25lqM1fXPUvt5vk",
  authDomain: "movies-f0a3b.firebaseapp.com",
  projectId: "movies-f0a3b",
  storageBucket: "movies-f0a3b.appspot.com",
  messagingSenderId: "374529692886",
  appId: "1:374529692886:web:c0f3f4579a06fa0049a577",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
