/// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUwtGbzNA7mJtcTnxEV50bDqAC_Ue5O8c",
  authDomain: "netflix-clone-e65af.firebaseapp.com",
  projectId: "netflix-clone-e65af",
  storageBucket: "netflix-clone-e65af.appspot.com",
  messagingSenderId: "868311832162",
  appId: "1:868311832162:web:c3673c818f0ba651c0a33b",
  measurementId: "G-JYGCJTV6Z9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }