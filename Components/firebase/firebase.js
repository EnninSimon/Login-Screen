import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHpRO14DTzrYCB27otJAfSB9CeGG4_Fko",
    authDomain: "rnfirebase-a357b.firebaseapp.com",
    projectId: "rnfirebase-a357b",
    storageBucket: "rnfirebase-a357b.appspot.com",
    messagingSenderId: "378811675034",
    appId: "1:378811675034:web:c9975f5352203d78d7ca23"
  };


 firebase.initializeApp(firebaseConfig)
export default firebase;