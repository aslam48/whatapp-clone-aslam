// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCzO83mdK9Tuu45weYkXAu8V7cS2jHTHII",
    authDomain: "whatapp-clone-app-9cf20.firebaseapp.com",
    projectId: "whatapp-clone-app-9cf20",
    storageBucket: "whatapp-clone-app-9cf20.appspot.com",
    messagingSenderId: "217493183657",
    appId: "1:217493183657:web:696673221aecbfde601db8",
    measurementId: "G-F0HPLG8XDM"
  };

  const firebasepp = firebase.initializeApp(firebaseConfig)

  const db = firebasepp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,  provider};
  export default db;