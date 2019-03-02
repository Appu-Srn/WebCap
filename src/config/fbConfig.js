  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjrpoqVcE1UrLaCw1wm2UQCld-O-rE24Y",
    authDomain: "webcap-915f0.firebaseapp.com",
    databaseURL: "https://webcap-915f0.firebaseio.com",
    projectId: "webcap-915f0",
    storageBucket: "webcap-915f0.appspot.com",
    messagingSenderId: "749865940850"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;