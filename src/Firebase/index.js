import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAHpE9vflzSXhbpXR0PFh9GIKwjpCvj8sA",
    authDomain: "ecommerce-cd07f.firebaseapp.com",
    projectId: "ecommerce-cd07f",
    storageBucket: "ecommerce-cd07f.appspot.com",
    messagingSenderId: "171319015737",
    appId: "1:171319015737:web:0a3b07bc78640ab3ff10e8",
    measurementId: "G-S4J6M45P39"
  };
  const fire =  firebase.initializeApp(firebaseConfig);
  const db = fire.firestore()

  export {fire,db}