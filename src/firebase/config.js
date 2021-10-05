import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBl_1-pGge_PzadK86AW0WheBw2jzyHp-8",
  authDomain: "muso-ninja-31d77.firebaseapp.com",
  projectId: "muso-ninja-31d77",
  storageBucket: "muso-ninja-31d77.appspot.com",
  messagingSenderId: "1055800779635",
  appId: "1:1055800779635:web:f43fb6787483afbc5cdb06"
};
// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }