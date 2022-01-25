import React from "react";
import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import { ImEyeBlocked, ImEye } from "react-icons/im";

function Signup() {
  const { setValidationMenuToggle, setCurrentUser, backendUrl } = useTheme();

  const [signupFormField_username, setSignupFormField_username] = useState("");
  const [signupFormField_password1, setSignupFormField_password1] =
    useState("");
  const [signupFormField_password2, setSignupFormField_password2] =
    useState("");

  const [signupFormField_email, setSignupFormField_email] = useState("");
  const [passwordsInputType1, setPasswordsInputType1] = useState("password");
  const [passwordsInputType2, setPasswordsInputType2] = useState("password");

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [password1IsValid, setPassword1IsValid] = useState(false);

  const [emailIsValid, setEmailIsValid] = useState(false);

  // SIGNUP FORM FIELD HANDLERS
  const handle_signupFormField_username = (e) => {
    let _username = e.target.value;
    if (_username !== "" && _username.length <= 10 && _username.length >= 3) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
    setSignupFormField_username(_username);
  };

  const handle_signupFormField_password1 = (e) => {
    let _password1 = e.target.value;
    if (
      _password1.length >= 5 &&
      /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(_password1)
    ) {
      setPassword1IsValid(true);
    } else {
      setPassword1IsValid(false);
    }
    setSignupFormField_password1(_password1);
  };

  const handleShowPasswordButton1 = () => {
    setPasswordsInputType1(
      passwordsInputType1 === "password" ? "text" : "password"
    );
  };
  const handle_signupFormField_password2 = (e) => {
    let password2 = e.target.value;
    setSignupFormField_password2(password2);
  };

  const handleShowPasswordButton2 = () => {
    setPasswordsInputType2(
      passwordsInputType2 === "password" ? "text" : "password"
    );
  };

  const handle_signupFormField_email = (e) => {
    let _email = e.target.value;
    if (_email !== "" && /(.+)@(.+){2,}\.(.+){2,}/.test(_email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setSignupFormField_email(_email);
  };

  const handle_signupForm_signupButton = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signupFormField_username,
        password1: signupFormField_password1,
        password2: signupFormField_password2,
        email: signupFormField_email,
      }),
    };
    console.log("request" + requestOptions);
    const response = await fetch(`${backendUrl}/users/signup`, requestOptions);
    console.log("repsonse" + response);
    if (response.ok) {
      const _currentUser = await response.json();
      console.log(_currentUser);
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      setSignupFormField_username("");
      setSignupFormField_password1("");
      setSignupFormField_password2("");
      setSignupFormField_email("");
      setValidationMenuToggle(false);
    }
  };

  return (
    <div className="Signup">
      <h1>Signup</h1>

      <form>
        <fieldset>
          <legend>Signup</legend>
          <div className={"row " + (usernameIsValid ? "valid" : "invalid")}>
            <label htmlFor="signupFormField_username">Username</label>
            <input
              type="text"
              id="signupFormField_username"
              value={signupFormField_username}
              onChange={handle_signupFormField_username}
            />
          </div>
          <div className={"note " + (usernameIsValid ? "valid" : "invalid")}>
            required, minium 3 characters and maximum 10 characters
          </div>
          <div className={`row ${password1IsValid ? "valid" : "invalid"}`}>
            <label htmlFor="signupFormField_password1">Password 1</label>
            <input
              type={passwordsInputType1}
              id="signupFormField_password1"
              value={signupFormField_password1}
              autoComplete="on"
              onChange={handle_signupFormField_password1}
            />
            <span className="eyes-icon" onClick={handleShowPasswordButton1}>
              {passwordsInputType1 === "password" ? (
                <ImEye />
              ) : (
                <ImEyeBlocked />
              )}
            </span>
          </div>
          <div className="row">
            <label htmlFor="signupFormField_password2">Password 2</label>
            <input
              type={passwordsInputType2}
              id="signupFormField_password2"
              value={signupFormField_password2}
              autoComplete="on"
              onChange={handle_signupFormField_password2}
            />
            <span className="eyes-icon" onClick={handleShowPasswordButton2}>
              {passwordsInputType2 === "password" ? (
                <ImEye />
              ) : (
                <ImEyeBlocked />
              )}
            </span>
            <div className={`note ${password1IsValid ? "valid" : "invalid"}`}>
              <p>required minium 5 characters and 1 number</p>
            </div>
          </div>
          <div className={"row " + (emailIsValid ? "valid" : "invalid")}>
            <label htmlFor="signupFormField_email">E-Mail</label>
            <input
              type="text"
              id="signupFormField_email"
              value={signupFormField_email}
              onChange={handle_signupFormField_email}
            />
          </div>
          <div className={"note " + (emailIsValid ? "valid" : "invalid")}>
            e.g. xxxx@xxxx.xx
          </div>
          <div className="buttonRow">
            <button onClick={handle_signupForm_signupButton}>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
export default Signup;
