import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBRCC4KdTit73xre8WLdZ3XLI1yBoc6sm4",
  authDomain: "routedesvinsmobile.firebaseapp.com",
  databaseURL: "https://routedesvinsmobile.firebaseio.com",
  projectId: "routedesvinsmobile",
  storageBucket: "routedesvinsmobile.appspot.com",
  messagingSenderId: "92180665710"
};
firebase.initializeApp(config);

const storage = firebase.storage().ref();

export { storage };
