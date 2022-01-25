import React from "react";
import { useState } from "react";
import { useTheme } from "../../ThemeContext";
// import { ImEyeBlocked, ImEye } from "react-icons/im";
import icons from "../../functions/icons.js";

function Signup() {
  const { setValidationMenuToggle, setCurrentUser, backendUrl } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [email, setEmail] = useState("");
  const [passwordsInputType1, setPasswordsInputType1] = useState("password");
  const [passwordsInputType2, setPasswordsInputType2] = useState("password");

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [repeatPasswordIsValid, setRepeatPasswordIsValid] = useState(false);
  const [signupToggle, setSignupToggle] = useState(true);

  const [emailIsValid, setEmailIsValid] = useState(false);

  // SIGNUP FORM FIELD HANDLERS
  const handleUsername = (e) => {
    let _username = e.target.value;
    if (_username !== "" && _username.length <= 10 && _username.length >= 3) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
    setUsername(_username);
  };

  const handlePassword = (e) => {
    let _password = e.target.value;
    if (_password.length >= 5 && /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(_password)) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPassword(_password);
  };

  const handleShowPassword = () => {
    setPasswordsInputType1(
      passwordsInputType1 === "password" ? "text" : "password"
    );
  };

  const handleRepeatPassword = (e) => {
    let _repeatPassword = e.target.value;
    if (_repeatPassword === password) {
      setRepeatPasswordIsValid(true);
    } else {
      setRepeatPasswordIsValid(false);
    }
    setRepeatPassword(_repeatPassword);
  };

  const handleShowRepeatPassword = () => {
    setPasswordsInputType2(
      passwordsInputType2 === "password" ? "text" : "password"
    );
  };

  const handleEmail = (e) => {
    let _email = e.target.value;
    if (_email !== "" && /(.+)@(.+){2,}\.(.+){2,}/.test(_email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmail(_email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password1: password,
        password2: repeatPassword,
        email: email,
      }),
    };
    console.log("request" + requestOptions);
    const response = await fetch(`${backendUrl}/users/signup`, requestOptions);
    console.log("repsonse" + response);
    if (response.ok) {
      const _currentUser = await response.json();
      console.log(_currentUser);
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      setUsername("");
      setPassword("");
      setRepeatPassword("");
      setEmail("");
      setValidationMenuToggle(false);
    } else {
      setSignupToggle(false);
    }
  };

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form>
        <fieldset>
          <legend>Signup</legend>
          <div className={"row " + (usernameIsValid ? "valid" : "invalid")}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className={"note " + (usernameIsValid ? "valid" : "invalid")}>
            required, minium 3 characters and maximum 10 characters
          </div>
          <div className={`row ${passwordIsValid ? "valid" : "invalid"}`}>
            <label htmlFor="password1">Password 1</label>
            <input
              type={passwordsInputType1}
              id="password1"
              value={password}
              autoComplete="on"
              onChange={handlePassword}
            />
            <span className="eyesIcon" onClick={handleShowPassword}>
              {passwordsInputType1 === "password" ? (
                <icons.ImEye />
              ) : (
                <icons.ImEyeBlocked />
              )}
            </span>
          </div>
          <div className={`note ${passwordIsValid ? "valid" : "invalid"}`}>
            <p>required minium 5 characters and 1 number</p>
          </div>
          <div className={`row ${repeatPasswordIsValid ? "valid" : "invalid"}`}>
            <label htmlFor="password2">Password 2</label>
            <input
              type={passwordsInputType2}
              id="password2"
              value={repeatPassword}
              autoComplete="on"
              onChange={handlePassword}
            />
            <span className="eyes-icon" onClick={handleShowRepeatPassword}>
              {passwordsInputType2 === "password" ? (
                <icons.ImEye />
              ) : (
                <icons.ImEyeBlocked />
              )}
            </span>
            <div
              className={`note ${repeatPasswordIsValid ? "valid" : "invalid"}`}
            >
              {!repeatPasswordIsValid && !signupToggle && <p>false</p>}
            </div>
          </div>
          <div className={"row " + (emailIsValid ? "valid" : "invalid")}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className={"note " + (emailIsValid ? "valid" : "invalid")}>
            e.g. xxxx@xxxx.xx
            {!emailIsValid && !signupToggle && <p>please check your email</p>}
          </div>
          <div className="buttonRow">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
export default Signup;
