import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7WTuR4V-i8T53J4dWDkTUF4chztDstuc",
  authDomain: "course-pp-24b77.firebaseapp.com",
  databaseURL: "https://course-pp-24b77-default-rtdb.firebaseio.com",
  projectId: "course-pp-24b77",
  storageBucket: "course-pp-24b77.appspot.com",
  messagingSenderId: "109111582184",
  appId: "1:109111582184:web:4b76e86fa30338a890585d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;