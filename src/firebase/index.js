import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDbz03Xed-0eLVrvna5E2yVU9dw8Nd_-Zg",
  authDomain: "furniro-22cb7.firebaseapp.com",
  projectId: "furniro-22cb7",
  storageBucket: "gs://furniro-22cb7.appspot.com",
  messagingSenderId: "603879773645",
  appId: "1:603879773645:web:7d284008efbb9bf7986084",
  measurementId: "G-LFQVH5L7S0"
};

const app = initializeApp(firebaseConfig);
// const storage = firebase.storage();

export const imageDB = getStorage(app)
