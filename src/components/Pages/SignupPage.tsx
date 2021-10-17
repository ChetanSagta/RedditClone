import axios, { AxiosError, AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../ui/Button";
import { FcCheckmark } from "react-icons/fc";
import { FaSpinner } from "react-icons/fa";
import { BASE_URL } from "../../CONSTANTS";
import './SignupPage.css';

export const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [uniqueUserErrorMessage, setUniqueUserErrorMessage] = useState("");

  const [uniqueUser, setUniqueUser] = useState<boolean | undefined>(undefined);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const checkUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    setTimeout(() => {
      axios({
        baseURL: BASE_URL + "/v1/uniqueUser",
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/text",
        },
        data: event.target.value,
      })
        .then(function (response) {
          setUniqueUser(response.data);
          if (response.data === false)
            setUniqueUserErrorMessage("Please select a unique Username");
        })
        .catch(function (error) {
          console.error(error);
        });
    }, 1000);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "" || email === "" || password === "") return;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords Don't Match");
      return;
    }

    if (!uniqueUser) {
      return;
    }

    setLoading(true);
    axios({
      baseURL: BASE_URL + "/v1/signup",
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        username: userName,
        password: password,
        email: email,
      },
    })
      .then(function (response: AxiosResponse<string>) {
        alert(response.data);
        history.push("/");
      })
      .catch(function (error: AxiosError<string>) {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="outerDiv">
        <div className="innerDiv">
          <h1>Sign Up</h1>
          By continuing, you agree to our User Agreement and Privacy Policy
        </div>
        <Button type="button">Continue with Google</Button>
        <br />
        <Button type="button">Continue with Apple</Button>
        <br />
        <div className="or">
          -------------------------- OR -------------------------
        </div>
        <form onSubmit={submitForm}>
          <input
            name="Email"
            placeholder="Email"
            type="email"
            className="textBox"
            maxLength={300}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTimeout(() => setEmail(event.target.value), 1000);
            }}
          />
          <br />
          <input
            name="username"
            placeholder="Username"
            className="textBox"
            maxLength={300}
            onChange={checkUser}
          />
          {uniqueUser && uniqueUser !== undefined && (
            <FcCheckmark className="inline-block" />
          )}
          {!uniqueUser && uniqueUser !== undefined && (
            <span className="errorMsg">
              {uniqueUserErrorMessage}
            </span>
          )}
          <br />
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="textBox"
            maxLength={300}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTimeout(() => setPassword(event.target.value), 1000);
            }}
          />
          {errorMessage && (
            <span className="errorMsg">
              {errorMessage}
            </span>
          )}
          <br />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            className="textBox"
            maxLength={300}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTimeout(() => setConfirmPassword(event.target.value), 1000);
            }}
          />
          {errorMessage && (
            <span className="errorMsg">
              {errorMessage}
            </span>
          )}
          <br />
          <Button type="submit" className="submitBtn">
            Sign up
          </Button>
          {loading && <FaSpinner className="spin" />}
          <p>
            Forgot your{" "}
            <Link to="" className="link">
              {" "}
              username
            </Link>{" "}
            or{" "}
            <Link to="" className="link">
              {" "}
              password
            </Link>{" "}
            ?
          </p>
        </form>
        <br />
        Already a Redditor?{" "}
        <Link to="/login" className="link underline">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};
