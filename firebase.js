import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/analytics';



const firebaseConfig = {
  apiKey: "AIzaSyChrzRz60FdWLvCKfGUYtm5GX7duVO8AKU",
  authDomain: "teamapple-4f107.firebaseapp.com",
  projectId: "teamapple-4f107",
  storageBucket: "teamapple-4f107.appspot.com",
  messagingSenderId: "359514959473",
  appId: "1:359514959473:web:b195adeaadc922f1da35d0",
  measurementId: "G-Z21B8YV9BB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

// Path: screens/SignUp.jsx 