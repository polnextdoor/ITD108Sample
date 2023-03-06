// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtzG7Jz9lb3GySCWdDcY_Cpx3LSV2-_ts",
  authDomain: "itd108sample.firebaseapp.com",
  projectId: "itd108sample",
  storageBucket: "itd108sample.appspot.com",
  messagingSenderId: "1042196235166",
  appId: "1:1042196235166:web:f2bbff55189ea497a94c8f",
  measurementId: "G-G0EF340XF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);