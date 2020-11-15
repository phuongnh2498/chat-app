import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyC1eAgL2Ud3md60jz9yLTg7hjkwtuJPL8g",
    authDomain: "chat-app-3cb1a.firebaseapp.com",
    databaseURL: "https://chat-app-3cb1a.firebaseio.com",
    projectId: "chat-app-3cb1a",
    storageBucket: "chat-app-3cb1a.appspot.com",
    messagingSenderId: "184252540609",
    appId: "1:184252540609:web:8601f53f2010f94d12d640",
    measurementId: "G-WFFNC0CD2B"
})
const auth = firebase.auth()
const firestore = firebase.firestore()


export { firebase, auth, firestore }