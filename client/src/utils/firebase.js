
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ezzprepo.firebaseapp.com",
  projectId: "ezzprepo",
  storageBucket: "ezzprepo.firebasestorage.app",
  messagingSenderId: "132650196824",
  appId: "1:132650196824:web:8f2ac42fa8fc308c4acf2d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };