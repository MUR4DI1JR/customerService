import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyB8HB7D6YvqsF1DPUiCyy_ZbGDYPrDa9kU",
    authDomain: "test-8ea1d.firebaseapp.com",
    databaseURL: "https://test-8ea1d.firebaseio.com",
    projectId: "test-8ea1d",
    storageBucket: "test-8ea1d.appspot.com",
    messagingSenderId: "211739492620",
    appId: "1:211739492620:web:0b9403cac6b18dd3a10929",
    measurementId: "G-8CBSSHVVNT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();

export default firebase;
