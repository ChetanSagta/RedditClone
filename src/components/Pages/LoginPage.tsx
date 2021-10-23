import axios, { AxiosError, AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../ui/Button";
import { FaSpinner } from "react-icons/fa";
import { UserInformation } from "../../DTO/UserInformation";
import { BASE_URL } from "../../CONSTANTS";
import "./LoginPage.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || password === "") return;
    setLoading(true);
    axios({
      baseURL: BASE_URL + "/v1/login",
      method: "post",
      data: {
        username: username,
        password: password,
      },
    })
      .then(function (response: AxiosResponse<UserInformation>) {
        localStorage.setItem("Jwt Token", response.data.jwtToken);
        localStorage.setItem("User", response.data.username);
        alert("User has been logged in.");
        history.push("/");
        window.location.reload();
      })
      .catch(function (error: AxiosError<string>) {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <h1>Login</h1>
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
          type="text"
          placeholder="Username"
          className="textBox"
          maxLength={300}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTimeout(() => setUsername(event.target.value), 1000);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="textBox"
          maxLength={300}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTimeout(() => {
              setPassword(event.target.value);
            }, 1000);
          }}
        />
        <br />
        <Button type="submit" className="submitBtn">
          Login
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
      New to Reddit?{" "}
      <Link to="/signup" className="link underline">
        {" "}
        Signup
      </Link>
    </div>
  );
};
