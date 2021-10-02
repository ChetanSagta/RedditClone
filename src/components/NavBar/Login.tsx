import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const Login = () => {

  return (
    <span>
      <Link to="/signup"><Button type="button">SignUp </Button></Link>
      <Link to="/login"><Button type="button">Login</Button></Link>
    </span>
  );
};
