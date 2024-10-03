import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBuyn8idMv6mmbQqD-TVgeJOWlzrGv0fsM",
	authDomain: "event-hanan.firebaseapp.com",
	projectId: "event-hanan",
	storageBucket: "event-hanan.appspot.com",
	messagingSenderId: "224109020702",
	appId: "1:224109020702:web:3d4fd0967141856100500f",
	measurementId: "G-VGXL7DHYYK"
  };

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
