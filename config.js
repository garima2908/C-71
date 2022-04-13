import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDY1KE48Yqvhqb-4Cxbn_G6zey87lTDqRM",
    authDomain: "e-library-1eaf1.firebaseapp.com",
    projectId: "e-library-1eaf1",
    storageBucket: "e-library-1eaf1.appspot.com",
    messagingSenderId: "251231590531",
    appId: "1:251231590531:web:51cdbf5a9fa6da51d6a3b6"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();