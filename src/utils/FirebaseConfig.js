import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBdtK9ey1_7CIVEd3dmcpM6KSX7By_PK4w",
  authDomain: "connectus-db745.firebaseapp.com",
  projectId: "connectus-db745",
  storageBucket: "connectus-db745.appspot.com",
  messagingSenderId: "741194373714",
  appId: "1:741194373714:web:42a5a9858b870429371d8b",
  measurementId: "G-7M0115EY22"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)