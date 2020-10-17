import React, { useCallback, useState } from "react";
import Layout from "../components/Layout";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import app from "../services/firebase";
import Login from "../components/Login";
import Register from "../components/Register";
import { useHistory } from "react-router";
import tokenCache from "../services/tokenCache";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* TODO: update ref url */}
      <Link color="inherit" href="https://material-ui.com/">
        Handcraftd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const history = useHistory();

  const page = history.location.search.replace("?form=", "");
  const shouldShowLoginParam = page === "register";

  console.log("SHOULD", history);

  const [shouldShowLogin, setShouldShowLogin] = useState(!shouldShowLoginParam);

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
  });

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = loginInfo;
      console.log(email, password, "EMAIL");
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        const token = await app.auth().currentUser.getIdToken();

        tokenCache.set(token);
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    [loginInfo, history]
  );

  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, firstName, lastName } = registrationInfo;

      try {
        await app.auth().createUserWithEmailAndPassword(email, password);
        const token = await app.auth().currentUser.getIdToken();

        tokenCache.set(token);

        //TODO: send first and last name to backend with token
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [registrationInfo, history]
  );

  return (
    <Layout shouldShowSidebar={false}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        {shouldShowLogin ? (
          <Login
            setLoginInfo={setLoginInfo}
            handleLogin={handleLogin}
            setLogin={setShouldShowLogin}
          />
        ) : (
          <Register
            setRegistrationInfo={setRegistrationInfo}
            handleRegister={handleRegister}
            setLogin={setShouldShowLogin}
          />
        )}
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
