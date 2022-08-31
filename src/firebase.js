import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCErVYijf1xIHDGLWNBk1Mc6LUXE2NRwJQ",
    authDomain: "real-time-chat-app-27067.firebaseapp.com",
    projectId: "real-time-chat-app-27067",
    storageBucket: "real-time-chat-app-27067.appspot.com",
    messagingSenderId: "313431929719",
    appId: "1:313431929719:web:31cbbb5a39b1684df1e772",
    measurementId: "G-NVL8BG3ZXP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider};
  export default db;