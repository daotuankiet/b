 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAs1e6zC0TPJwIGH23b3c_DQR-w5wJt51I",
    authDomain: "test-b885c.firebaseapp.com",
    databaseURL: "https://test-b885c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-b885c",
    storageBucket: "test-b885c.firebasestorage.app",
    messagingSenderId: "835793081315",
    appId: "1:835793081315:web:a41ccdc6af13432cfb46d6",
    measurementId: "G-71JYHKKDP8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
