export default {
  apiKey: 'AIzaSyAy2LfQBhpfM6gKT_3O-zBlYEO6cHordi4',
  authDomain: "project-3216890005608163631.firebaseapp.com",
  databaseURL: "https://project-3216890005608163631.firebaseio.com",
  storageBucket: 'PUT_FIREBASE_STORAGE_BUCKET_HERE',
  messagingSenderId: '',
  uiConfig: {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  },
};