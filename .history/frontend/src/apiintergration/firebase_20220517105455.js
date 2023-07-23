import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA3ARP2SHm3BAsDMOQ0o52z6XqkaT4PUwQ",
  authDomain: "anypay-28455.firebaseapp.com",
  projectId: "anypay-28455",
  storageBucket: "anypay-28455.appspot.com",
  messagingSenderId: "1067102265748",
  appId: "1:1067102265748:web:0e3f616d8af48933452f81",
  measurementId: "G-D37HMCCEGX"
})
export const auth = app.auth()
export default app
