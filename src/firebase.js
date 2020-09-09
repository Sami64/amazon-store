import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOS7bR2Tm7mN09E_PuDA0ZX6FYtRGkTrA",
    authDomain: "store-clone-c12b6.firebaseapp.com",
    databaseURL: "https://store-clone-c12b6.firebaseio.com",
    projectId: "store-clone-c12b6",
    storageBucket: "store-clone-c12b6.appspot.com",
    messagingSenderId: "632082475803",
    appId: "1:632082475803:web:adad6edaf2e5c00cd981be",
    measurementId: "G-YJLSYHPNRG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };