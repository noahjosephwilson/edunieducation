import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSYf8LHsjwVQQMe7uS3T3tmaVwKOvokf0",
    authDomain: "eduni-7df97.firebaseapp.com",
    projectId: "eduni-7df97",
    storageBucket: "eduni-7df97.firebasestorage.app",
    messagingSenderId: "471454033881",
    appId: "1:471454033881:web:ac17618f4cb11e9e929bc8",
    measurementId: "G-H5000P49YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 