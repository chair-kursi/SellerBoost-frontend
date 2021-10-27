import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Cookies from "universal-cookie";

const firebaseConfig = {
  apiKey: "AIzaSyCHhkCsDlBigYJzYhy9fw0bK2nI0y_xL8A",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const Auth = getAuth();
export const handleSignIn = async (email, pass) => {
  return await signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(JSON.stringify(user));
      const cookies = new Cookies();
      cookies.set("LocalId", user.uid, {
        path: "/",
        sameSite: "strict",
        domain: ".suprcommerce.com",
      });
      alert("Successfully Signed In!!..");
      return true;
    })
    .catch(() => {
      alert("Invalid Email/Password!!..");
      return false;
    });
};

const handleSignOut = () => {
  alert("successfully signed out");
  const cookies = new Cookies();
  cookies.remove("LocalId", {
    path: "/",
    sameSite: "strict",
    domain: ".suprcommerce.com",
  });
  return signOut(auth);
};
export { handleSignOut, onAuthStateChanged };
