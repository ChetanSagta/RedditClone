import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const SignupPage = () => {
  const [matchPassword, setMatchPassword] = useState(false);
  const [uniqueUser, setUniqueUser] = useState(true);
  const baseURL = "http://localhost:8080";

  const checkUser = (event: ChangeEvent<HTMLInputElement>) => {
    axios({
      baseURL: baseURL + "/v1/uniqueUser",
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/text",
      },
    })
      .then(function (response) {
        console.log(response.data);
        setUniqueUser(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        console.log("Finally");
      });

    console.log(event.target.value);
  };

  const signup = () => {
    console.log(signup);
  };

  return (
    <div>
      <div className="m-20">
        <div className="mb-10">
          <h1 className="font-bold">Sign Up</h1>
          By continuing, you agree to our User Agreement and Privacy Policy
        </div>
        <Button type="button">Continue with Google</Button>
        <br />
        <Button type="button">Continue with Apple</Button>
        <br />
        <div className="mt-10 mb-10">
          -------------------------- OR -------------------------
        </div>
        <form>
          <input
            placeholder="Email"
            type="email"
            className="resize-none overflow-auto outline-none p-2 h-full mb-1"
            maxLength={300}
          />
          <br />
          <input
            placeholder="Username"
            className="resize-none overflow-auto outline-none p-2 h-full mb-1"
            maxLength={300}
            onChange={checkUser}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="resize-none overflow-auto outline-none p-2 h-full mb-1"
            maxLength={300}
          />
          <br />
          <input
            placeholder="Confirm Password"
            type="password"
            className="resize-none overflow-auto outline-none p-2 h-full mb-1"
            maxLength={300}
          />
          <br />
          <Button type="submit" className="pr-5 pl-5 w-20">
            Sign up
          </Button>
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
        Already a Redditor?{" "}
        <Link to="/login" className="text-blue-500 underline">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};
