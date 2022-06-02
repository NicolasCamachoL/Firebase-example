import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
  getFirestore, collection, getDocs,  onSnapshot, addDoc, deleteDoc,doc,getDoc,updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyAWrVXJPz3fC8XmwDZgPNDovC6KSv1gN7g",
  authDomain: "ejemploclase-169fa.firebaseapp.com",
  projectId: "ejemploclase-169fa",
  storageBucket: "ejemploclase-169fa.appspot.com",
  messagingSenderId: "168774638123",
  appId: "1:168774638123:web:0cc817ffd22b887e79a86e",
  measurementId: "G-LE9FQLF81E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
