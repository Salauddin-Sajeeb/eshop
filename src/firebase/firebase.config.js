import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: 'eshop-a5e26.firebaseapp.com',
  projectId: import.meta.env.VITE_projectId,
  storageBucket: 'eshop-a5e26.appspot.com',
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId:'1:715428634063:web:d950a45e068e6c80f406ba',
};

export const app = initializeApp(firebaseConfig);
