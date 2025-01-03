import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMTwG-JUfUQckXBhqksvPlyseqeD8z4K8",
  authDomain: "seba-bazzar-shop.firebaseapp.com",
  projectId: "seba-bazzar-shop",
  storageBucket: "seba-bazzar-shop.appspot.com",
  messagingSenderId: "18883898430",
  appId: "1:18883898430:web:9b70cd82b8a7d7315e356f",
  measurementId: "G-D7B7Y8ZJM8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
