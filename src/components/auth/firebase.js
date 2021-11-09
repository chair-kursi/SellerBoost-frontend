import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCHhkCsDlBigYJzYhy9fw0bK2nI0y_xL8A",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const diffToast = () => {
  toast.success("Successfully Logged In");
};
const auth = getAuth();
export const Auth = getAuth();
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

// export const handleSignIn = async (login, password) => {
//   return await getAuth()
//     .signInWithEmailAndPassword(login, password)
//     .then(({ user }) => {
//       return user.getIdToken().then((idToken) => {
//         return fetch("api.suprcommerce.com:3002/sessionLogin", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "CSRF-Token": Cookies.get("XSRF-TOKEN"),
//           },
//           body: JSON.stringify({ idToken }),
//         });
//       });
//     })
//     .then(() => {
//       return auth.signOut();
//     })
//     .then(() => {
//       window.location.assign("/profile");
//     });
// };
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

      // alert("Successfully Signed In!!..");
      return true;
    })
    .catch(() => {
      // alert("Invalid Email/Password!!..");
      return false;
    });
};

const handleSignOut = () => {
  const cookies = new Cookies();
  cookies.remove("LocalId", {
    path: "/",
    sameSite: "strict",
    domain: ".suprcommerce.com",
  });
  return signOut(auth);
};

export { handleSignOut, onAuthStateChanged };
