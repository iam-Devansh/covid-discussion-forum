import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDNIL6Urv9Cao6fFXBUa1TgrQhi_OnEUwU",
    authDomain: "slack-react-clone-1b6cc.firebaseapp.com",
    projectId: "slack-react-clone-1b6cc",
    storageBucket: "slack-react-clone-1b6cc.appspot.com",
    messagingSenderId: "111476701358",
    appId: "1:111476701358:web:5a84d8fa15c682d0ae953f",
    measurementId: "G-Y99Y1ZKRHS"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;