
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZp1MDsxFui1heCh7yYYM5n2nWUFqf3w",
  authDomain: "board-games-686cb.firebaseapp.com",
  projectId: "board-games-686cb",
  storageBucket: "board-games-686cb.appspot.com",
  messagingSenderId: "732951501490",
  appId: "1:732951501490:web:919e3e07f96dafea3f07ab"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app