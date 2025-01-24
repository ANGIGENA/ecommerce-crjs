import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxZZFktkQnoBhFo6dw8D4OnQlPXPI040Q", 
  authDomain: "ecommerce-crjs.firebaseapp.com",
  projectId: "ecommerce-crjs",
  storageBucket: "ecommerce-crjs.firebasestorage.app",
  messagingSenderId: "689754921344",
  appId: "1:689754921344:web:effe68aa22121e7224c965"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db