import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFY82MjDxQSZg3l8yqkamkU_7HpYlJa_U',
  authDomain: 'nwitter-reloaded-9ab5b.firebaseapp.com',
  projectId: 'nwitter-reloaded-9ab5b',
  storageBucket: 'nwitter-reloaded-9ab5b.firebasestorage.app',
  messagingSenderId: '595269795924',
  appId: '1:595269795924:web:4b068244c5a68cb118edc1',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);