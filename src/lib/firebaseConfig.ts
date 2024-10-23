// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjKwSmf3qDpUhdKuhJL6p6zhC3DJiW2dA",
    authDomain: "pgagi-7c5f3.firebaseapp.com",
    projectId: "pgagi-7c5f3",
    storageBucket: "pgagi-7c5f3.appspot.com",
    messagingSenderId: "276049286697",
    appId: "1:276049286697:web:88edd05a542c412cb5ae38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
