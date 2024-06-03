import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCor5EcVFk00gwQdneXJxyGEpvljE2OmqE",
  authDomain: "carrito2-6711c.firebaseapp.com",
  projectId: "carrito2-6711c",
  storageBucket: "carrito2-6711c.appspot.com",
  messagingSenderId: "913297391378",
  appId: "1:913297391378:web:24d71e9c5e13494272bdcb"
};


const app = initializeApp(firebaseConfig);
export const db  =  getFirestore(app)





