import firebase from 'firebase';
import firebaseConfig from './config';


const firebaseApp = firebase.initializeApp(firebaseConfig,'database');

export const db = firebaseApp.database();