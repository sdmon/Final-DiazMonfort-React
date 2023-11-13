import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOZVuoi2crGzNoXYmnvubARPvAO7aXYZQ",
  authDomain: "outerwilds-d311b.firebaseapp.com",
  projectId: "outerwilds-d311b",
  storageBucket: "outerwilds-d311b.appspot.com",
  messagingSenderId: "768314937048",
  appId: "1:768314937048:web:305597b27c3b47a83251ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
