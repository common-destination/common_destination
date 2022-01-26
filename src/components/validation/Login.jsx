import React from "react";
import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import { useNavigate } from "react-router-dom";
import icons from "../../functions/icons.js";

function Login() {
  // const { setValidationMenuToggle, setCurrentUser, backendUrl, handleLogout } =
  const { setValidationMenuToggle, setCurrentUser, backendUrl } = useTheme();

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
      setValidationMenuToggle(false);
    }
  };

  const handleShowPasswordButton = () => {
    setPasswordsInputType(
      passwordsInputType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="Login">
      <form>
        <fieldset>
          <legend>Login</legend>
          <div className="loginFormMessage">{loginFormMessage}</div>
          <div className="row">
            {/* <label htmlFor="login">Username</label> */}
            <input
              type="text"
              id="login"
              value={username}
              placeholder="enter your username"
              onChange={handleUsername}
            />
          </div>
          <div className="row">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type={passwordsInputType}
              id="password"
              value={password}
              autoComplete="on"
              placeholder="enter your password"
              onChange={handlePassword}
            />
            <span className="eyesIcon" onClick={handleShowPasswordButton}>
              {passwordsInputType === "password" ? (
                <icons.ImEye />
              ) : (
                <icons.ImEyeBlocked />
              )}
            </span>
          </div>
          <div className="buttonRow">
            <button onClick={handleUsernameButton}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
