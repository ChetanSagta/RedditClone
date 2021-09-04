import { Button } from "../ui/Button";

export const Login = () => {

  const signUpHandler = () => {
    console.log("Sign Up Handler Called");
  }

  const loginHandler = () => {
    console.log("Login Handler Called");
  }


  return (
    <span>
      <Button type="button" onClick={signUpHandler}>SignUp </Button>
      <Button type="button" onClick={loginHandler}>Login</Button>
    </span>
  );
};
