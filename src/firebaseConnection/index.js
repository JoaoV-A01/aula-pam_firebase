import firebase from "firebase/app";
import 'firebase/database';
    
const firebaseConfig = {
    apiKey: "AIzaSyCvRnJUmlotDDlklDj6zmXnWa-4XA7_PtI",
    authDomain: "etecct-pam.firebaseapp.com",
    databaseURL: "https://etecct-pam-default-rtdb.firebaseio.com",
    projectId: "etecct-pam",
    storageBucket: "etecct-pam.appspot.com",
    messagingSenderId: "38619412804",
    appId: "1:38619412804:web:8ab5ce5082995340e27f11",
    measurementId: "G-ZS64ZDJFM4"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;