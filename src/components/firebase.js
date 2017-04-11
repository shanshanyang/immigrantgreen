import * as firebase from 'firebase/firebase-browser';

const form = firebase.initializeApp({
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

const sections = firebase.database(form).ref('sections').orderByKey();
const fields = firebase.database(form).ref('fields');

export { sections, fields };
