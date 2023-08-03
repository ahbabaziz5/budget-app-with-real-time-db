// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-kWzJvGpn9B7XVMyfx6r-fBCL1uYEp4",
  authDomain: "test-d14aa.firebaseapp.com",
  databaseURL: "https://test-d14aa-default-rtdb.firebaseio.com",
  projectId: "test-d14aa",
  storageBucket: "test-d14aa.appspot.com",
  messagingSenderId: "1022392053565",
  appId: "1:1022392053565:web:51e35dec0dd7cbd1629f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
