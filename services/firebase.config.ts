import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAVcqrrgLCUSTCRT9C1tGKwTVAMBTv8hcc",
  authDomain: "desenvolvimento-mobile-at.firebaseapp.com",
  projectId: "desenvolvimento-mobile-at",
  storageBucket: "desenvolvimento-mobile-at.appspot.com",
  messagingSenderId: "7896050383",
  appId: "1:7896050383:web:aeb6e04b947f1d93c4e5ba"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
