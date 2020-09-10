import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { css } from "@emotion/core";

import "./Login.css";
import { auth } from "./firebase";

import LoadingOverlay from "react-loading-overlay";

import { ScaleLoader } from "react-spinners";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    justify-content: center;
    margin: 0 auto;
    border-color: red;
  `;

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  const register = (e) => {
    e.preventDefault();
    setLoading(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          setLoading(false);
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG27.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Conditions of Use & Sale. Please see our
          Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
      <div className="loading">
        {loading ? (
          <LoadingOverlay
            active={loading}
            spinner={
              <ScaleLoader
                css={override}
                color="#f0c14b"
                size={70}
                loading={loading}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgba(255, 0, 0,0.5)",
                  }),
                }}
              />
            }
          ></LoadingOverlay>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
