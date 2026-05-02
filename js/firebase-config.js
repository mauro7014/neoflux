import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiunFraicsHDEM6UbN6mYi_wLE8hgkp2s",
  authDomain: "neoflux-b1d66.firebaseapp.com",
  projectId: "neoflux-b1d66",
  storageBucket: "neoflux-b1d66.firebasestorage.app",
  messagingSenderId: "500598083000",
  appId: "1:500598083000:web:4b424f1b507bbcbfed534d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);