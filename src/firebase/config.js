import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// FIREBASE TOKEN
const firebaseConfig = {
  apiKey: "AIzaSyCuEY0RDk76Mx3SwrfwD3zU2mhO3n7umHk",
  authDomain: "candleaf.firebaseapp.com",
  projectId: "candleaf",
  storageBucket: "candleaf.appspot.com",
  messagingSenderId: "307725778788",
  appId: "1:307725778788:web:d48b37827086ac89d7c471"
};

firebase.initializeApp(firebaseConfig)

// SERVICES
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth };