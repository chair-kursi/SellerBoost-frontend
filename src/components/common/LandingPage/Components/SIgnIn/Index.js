import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router";
import { handleSignIn } from "../../../../auth/firebase";

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
axios.defaults.withCredentials = true;

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  var doSignIn = (email, pass) => {
    const signin = handleSignIn(email, pass);
    if (signin) history.push("/Home");
  };

  // const creatCookie = () => {
  //   cookies.set("LocalId", "6N9yuxkxf6MhmSdOZuvAuze3l943", {
  //     path: "/",
  //     sameSite: "strict",
  //     expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  //     secure: true,
  //     // domain: "15.206.171.9",
  //   });
  // };
  axios
    .get("http://api.suprcommerce.com:3002/client", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
    });

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">SuperCommerce</Icon>
          <FormContent>
            <Form action="">
              <FormH1>Sign In To Your Account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="passowrd"
                required
                onChange={(e) => setPass(e.target.value)}
              />

              <FormButton onClick={() => doSignIn(email, pass)}>
                Continue
              </FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
