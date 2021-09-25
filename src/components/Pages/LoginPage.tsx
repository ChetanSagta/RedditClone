import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { TextArea } from "../ui/TextArea";

export const LoginPage = () => {

  return (
    <div className="m-20">
      <p className="mb-10">
        <h1 className="font-bold">Login</h1>
        By continuing, you agree to our User Agreement and Privacy Policy
      </p>
      <Button type="button">Continue with Google</Button>
      <br />
      <Button type="button">Continue with Apple</Button>
      <br />
      <div className="mt-10 mb-10">
        -------------------------- OR -------------------------
      </div>
      <form>
        <TextArea
          placeholder="Username"
          rows={1}
          className="resize-none overflow-auto outline-none pt-2 pl-2"
          maxLength={300}
        />
        <br />
        <br />
        <TextArea
          placeholder="Password"
          rows={1}
          className="resize-none overflow-auto outline-none pt-2 pl-2"
          maxLength={300}
        />
        <br />
        <Button type="submit" className="pr-5 pl-5 w-20">
          Login
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
      New to Reddit?{" "}
      <Link to="/signup" className="text-blue-500 underline">
        {" "}
        Signup
      </Link>
    </div>
  );
};
