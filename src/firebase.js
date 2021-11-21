import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHX-ZDo-CuiqfkyCqeBphdWle7hclF7w4",
  authDomain: "tauqeer-yt-clone.firebaseapp.com",
  projectId: "tauqeer-yt-clone",
  storageBucket: "tauqeer-yt-clone.appspot.com",
  messagingSenderId: "811201427880",
  appId: "1:811201427880:web:16551bc91db05e2a71c59d",
  measurementId: "G-QXHQL539RJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
