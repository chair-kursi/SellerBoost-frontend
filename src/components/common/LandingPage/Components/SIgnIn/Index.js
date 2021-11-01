import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router";
import { handleSignIn } from "../../../../auth/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";
import "../SIgnIn/SignIn.css";
axios.defaults.withCredentials = true;

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signIn, setSignIn] = useState("");
  const [loading, setLoading] = useState("");

  var doSignIn = (email, pass, e) => {
    e.preventDefault();

    setLoading("in Progress");
    console.log(email, pass);
    setSignIn(email, pass);
    handleSignIn(email, pass).then((signedIn) => {
      setLoading(signedIn);
      if (signedIn) {
        history.push("/Home");
      } else {
        diffToast2();
      }
    });
  };

  // const checkingfield = () => {
  //   if (email === "" && pass === "") {
  //     toast.error("Enter Email and Password");
  //   }
  // };
  const diffToast2 = () => {
    toast.error("Incorrect Email or Password");
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">SuprCommerce</Icon>
          <FormContent>
            <Form action="">
              <FormH1>SignIn To Your Account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel htmlFor="for">Password</FormLabel>
              <input
                className="passwrd"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                required
              />

              <FormButton onClick={(e) => doSignIn(email, pass, e)}>
                Continue &emsp;
                {loading === "in Progress" ? (
                  <ReactBootStrap.Spinner
                    animation="border"
                    variant="warning"
                  />
                ) : (
                  ""
                )}
              </FormButton>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

// import React, { useState } from "react";
// import axios from "axios";
// import Cookies from "universal-cookie";
// import { useHistory } from "react-router";
// import { handleSignIn } from "../../../../auth/firebase";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as ReactBootStrap from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Container,
//   FormWrap,
//   Icon,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   FormButton,
//   Text,
// } from "./SignInElements";
// import "../SIgnIn/SignIn.css";
// axios.defaults.withCredentials = true;

// const SignIn = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [signIn, setSignIn] = useState("");

//   var doSignIn = (email, pass, e) => {
//     e.preventDefault();

//     console.log(email, pass);
//     setSignIn(email, pass);
//     handleSignIn(email, pass).then((signedIn) => {
//       if (signedIn) {
//         history.push("/Home");
//       }
//     });
//   };

//   const checkingfield = () => {
//     if (email === "" && pass === "") {
//       toast.error("Please Enter Email and Password");
//     }
//   };
//   return (
//     <>
//       <Container>
//         <FormWrap>
//           <Icon to="/">SuprCommerce</Icon>
//           <FormContent>
//             <Form action="">
//               <FormH1>SignIn To Your Account</FormH1>
//               <FormLabel htmlFor="for">Email</FormLabel>
//               <FormInput
//                 type="email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormLabel htmlFor="for">Password</FormLabel>
//               <input
//                 className="passwrd"
//                 type="password"
//                 onChange={(e) => setPass(e.target.value)}
//                 required
//               />

//               <FormButton
//                 onClick={((e) => doSignIn(email, pass, e), checkingfield)}
//               >
//                 Continue &emsp;
//                 {signIn ? (
//                   <ReactBootStrap.Spinner
//                     animation="border"
//                     variant="warning"
//                   />
//                 ) : (
//                   ""
//                 )}
//               </FormButton>

//               <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="colored"
//               />

//               <Text>Forgot Password</Text>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// };

// export default SignIn;
