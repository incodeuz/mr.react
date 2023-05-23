import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARekXiZBjaU5YNvtQqvGtWoiFVkbTgw3c",
  authDomain: "mrreact-26a2d.firebaseapp.com",
  projectId: "mrreact-26a2d",
  storageBucket: "mrreact-26a2d.appspot.com",
  messagingSenderId: "817067877287",
  appId: "1:817067877287:web:8faf337cfc9e1f58c1cc82",
  measurementId: "G-5R3MQR5F5T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
