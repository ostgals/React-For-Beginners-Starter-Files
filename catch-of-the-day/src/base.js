import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAm3VYlTV71ELnJrKdGh8sJDujCCotTNic",
  authDomain: "catchoftheday-ostgals.firebaseapp.com",
  databaseURL: "https://catchoftheday-ostgals.firebaseio.com",
  projectId: "catchoftheday-ostgals",
  storageBucket: "catchoftheday-ostgals.appspot.com",
  messagingSenderId: "822452769660"
};

export const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());
export default base;
