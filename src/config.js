import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyClRUOfPtsSiIVCH3Vm220n5tSNVR6wQ5I",
    authDomain: "testapp-3a437.firebaseapp.com",
    databaseURL: "https://testapp-3a437.firebaseio.com",
    projectId: "testapp-3a437",
    storageBucket: "testapp-3a437.appspot.com",
    messagingSenderId: "721458887331"
  };

let app= Firebase.initializeApp(config);
export const db=app.database();