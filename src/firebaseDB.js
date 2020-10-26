import firebase from 'firebase';
import firebaseConfig from './config';


const firebaseApp = firebase.initializeApp(firebaseConfig,'fireDB');

export const db = firebaseApp.database();