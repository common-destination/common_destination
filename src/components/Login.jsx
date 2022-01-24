import React from "react";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import { ImEyeBlocked, ImEye } from "react-icons/im";

function Login() {
  const { setCurrentUser, backendUrl } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginFormMessage, setLoginFormMessage] = useState("");
  const [passwordsInputType, setPasswordsInputType] = useState("password");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    const _username = e.target.value;
    setUsername(_username);
  };

  const handlePassword = (e) => {
    const _password = e.target.value;
    setPassword(_password);
  };

  const handleUsernameButton = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    console.log(requestOptions);
    const response = await fetch(`${backendUrl}/users/login`, requestOptions);
    if (!response.ok) {
      setUsername("");
      setPassword("");
      setLoginFormMessage("Bad Login");
    } else {
      const _currentUser = await response.json();
      console.log(_currentUser);
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      navigate("/");
      setUsername("");
      setPassword("");
    }
  };

  const handleShowPasswordButton = () => {
    setPasswordsInputType(
      passwordsInputType === "password" ? "text" : "password"
    );
  };

  const handle_logoutForm_logoutButton = async (e) => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };
    const response = await fetch(
      `${backendUrl}/users/logout`,
      requestOptions
    );
    if (response.ok) {
      const _currentUser = await response.json();
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      navigate("/login");
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <fieldset>
          <legend>Login</legend>
          <div className="loginFormMessage">{loginFormMessage}</div>
          <div className="row">
            <label htmlFor="login">Username</label>
            <input
              type="text"
              id="login"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type={passwordsInputType}
              id="password"
              value={password}
              autoComplete="on"
              onChange={handlePassword}
            />
            <span className="eyes-icon" onClick={handleShowPasswordButton}>
              {passwordsInputType === "password" ? <ImEye /> : <ImEyeBlocked />}
            </span>
          </div>
          <div className="buttonRow">
            <button onClick={handleUsernameButton}>Login</button>
            <button onClick={handle_logoutForm_logoutButton}>Logout</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
