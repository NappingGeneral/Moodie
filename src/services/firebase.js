import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2pSkbCAtTz7Ftydxpi-OjK6FvFfIizEM",
  authDomain: "moodie-b817f.firebaseapp.com",
  projectId: "moodie-b817f",
  storageBucket: "moodie-b817f.appspot.com",
  messagingSenderId: "1070091312549",
  appId: "1:1070091312549:web:25fcf1c592aedb3fe99c4c",
  measurementId: "G-F3575JL6YM",
}

export const app = initializeApp(firebaseConfig)
export const fire = getFirestore(firebaseConfig)
