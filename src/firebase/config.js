import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTfMrb-s9qCXWVLspMzVROlU2irbkeOA4",
  authDomain: "sayahalloween-9e2fd.firebaseapp.com",
  projectId: "sayahalloween-9e2fd",
  storageBucket: "sayahalloween-9e2fd.firebasestorage.app",
  messagingSenderId: "1076115604252",
  appId: "1:1076115604252:web:bb85ec2eb9ad7370e9f0d9",
  measurementId: "G-80MPJGESXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const analytics = getAnalytics(app);

export { db }