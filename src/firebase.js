import * as firebase from 'firebase'
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZKHmFwXTP4axvF5KD5OHwlWVJc1YSJ6U",
    authDomain: "leanboard-a5bcb.firebaseapp.com",
    databaseURL: "https://leanboard-a5bcb.firebaseio.com",
    projectId: "leanboard-a5bcb",
    storageBucket: "leanboard-a5bcb.appspot.com",
    messagingSenderId: "1070595106298",
    appId: "1:1070595106298:web:0386a4136cd8bd9e69b043",
    measurementId: "G-CB2845RNZ3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// firebase google setup
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"
});
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
        .then(localStorage.setItem('isLoggedIn', true))
        .catch()
}
export default firebase;
