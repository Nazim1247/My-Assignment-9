// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZhEHLxCtOi8901EocE7zhfhk4tyoYeE",
  authDomain: "my-assignment-09.firebaseapp.com",
  projectId: "my-assignment-09",
  storageBucket: "my-assignment-09.firebasestorage.app",
  messagingSenderId: "130491215337",
  appId: "1:130491215337:web:c6fe31748c80cfd5e66f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;