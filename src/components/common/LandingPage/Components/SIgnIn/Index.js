import React, { useState } from "react";
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
const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  var doSignIn = (email, pass) => {
    const signin = handleSignIn(email, pass);
    if (signin) history.push("/Home");
  };

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
