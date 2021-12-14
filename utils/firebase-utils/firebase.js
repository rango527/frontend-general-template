import firebase from 'firebase/app';
import 'firebase/analytics';
import('firebase/functions');

const firebaseConfig = {
  apiKey: 'AIzaSyD9rs_3Tu4e757jXn6VYrgm9q_DN82M9bE',
  authDomain: 'mintdropz-unlockable.firebaseapp.com',
  projectId: 'mintdropz-unlockable',
  storageBucket: 'mintdropz-unlockable.appspot.com',
  messagingSenderId: '934098215532',
  appId: '1:934098215532:web:dbd5adad393f20fce5ee49',
  measurementId: 'G-MVJ67TSGDT',
};

if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
