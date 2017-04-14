import * as firebase from 'firebase/firebase-browser';

const appdata = firebase.initializeApp({
  apiKey: 'AIzaSyAy2LfQBhpfM6gKT_3O-zBlYEO6cHordi4',
  authDomain: 'project-3216890005608163631.firebaseapp.com',
  databaseURL: 'https://project-3216890005608163631.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '',
});

// ** authentication to read
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// firebase.auth().signInWithPopup(provider).then((result) => {
//   // This gives you a Google Access Token.
//   const token = result.credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   return { token, user };
// });

const rootRef = firebase.database(appdata).ref("form1");
const formSections = firebase.database(appdata).ref('form1/sections').orderByKey();
const formFields = firebase.database(appdata).ref('form1/fields').orderByKey();

export { rootRef, formSections, formFields };
