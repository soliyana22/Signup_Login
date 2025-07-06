
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5P--9ftkZGAJI52stYFGz8Tj2Dztjfws",
  authDomain: "react-task-three-ebfbc.firebaseapp.com",
  projectId: "react-task-three-ebfbc",
  storageBucket: "react-task-three-ebfbc.firebasestorage.app",
  messagingSenderId: "913902212229",
  appId: "1:913902212229:web:b89db2383e5f3d965f45ec"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth
const auth = getAuth(app);

// 👇 make sure this line is present
export { auth };
