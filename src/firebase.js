import firebase from 'firebase/app';
import "firebase/database"

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
export default firebase;
