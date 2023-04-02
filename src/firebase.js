import { getStorage } from '@firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDzyW4ZKp10nMjqnqi4pmz0I1dmNrze160',
  authDomain: 'ezyfi-722cf.firebaseapp.com',
  projectId: 'ezyfi-722cf',
  storageBucket: 'ezyfi-722cf.appspot.com',
  messagingSenderId: '592754353649',
  appId: '1:592754353649:web:748ec5c3870edbf2a41050',
  measurementId: 'G-P0DY06X2Z5',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
