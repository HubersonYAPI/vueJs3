import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCmIVTutlcZLs7QkqSQ3A6_ioyE1Yonuj0",
    authDomain: "audio-manager-d23b6.firebaseapp.com",
    projectId: "audio-manager-d23b6",
    storageBucket: "audio-manager-d23b6.appspot.com",
    messagingSenderId: "566157210998",
    appId: "1:566157210998:web:1e7885427aabfb255ab657"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp =firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }