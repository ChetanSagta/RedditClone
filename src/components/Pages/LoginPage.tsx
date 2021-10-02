import axios, { AxiosError, AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserInformation } from "../../DTO/UserInformation";
import { Button } from "../ui/Button";
import { FaSpinner } from "react-icons/fa";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const baseURL = "http://localhost:8080";

  const history = useHistory();

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || password === "") return;
    setLoading(true);
    axios({
      baseURL: baseURL + "/v1/login",
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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
      })
      .catch(function (error: AxiosError<string>) {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="m-20">
      <div className="mb-10">
        <h1 className="font-bold">Login</h1>
        By continuing, you agree to our User Agreement and Privacy Policy
      </div>
      <Button type="button">Continue with Google</Button>
      <br />
      <Button type="button">Continue with Apple</Button>
      <br />
      <div className="mt-10 mb-10">
        -------------------------- OR -------------------------
      </div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Username"
          className="resize-none overflow-auto outline-none pt-2 pl-2"
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
          className="resize-none overflow-auto outline-none pt-2 pl-2"
          maxLength={300}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTimeout(() => {
              setPassword(event.target.value);
            }, 1000);
          }}
        />
        <br />
        <Button type="submit" className="pr-5 pl-5 w-20">
          Login
        </Button>
        {loading && <FaSpinner className="animate-spin" />}
        <p>
          Forgot your{" "}
          <Link to="" className="text-blue-500">
            {" "}
            username
          </Link>{" "}
          or{" "}
          <Link to="" className="text-blue-500">
            {" "}
            password
          </Link>{" "}
          ?
        </p>
      </form>
      <br />
      New to Reddit?{" "}
      <Link to="/signup" className="text-blue-500 underline">
        {" "}
        Signup
      </Link>
    </div>
  );
};
