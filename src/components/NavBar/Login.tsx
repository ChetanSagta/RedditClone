import { Button } from "../ui/Button";

export const Login = () => {
  return (
    <span className="flex-grow">
      <Button
        type="button"
        className="rounded-xl border-2 p-2 float-right m-1 bg-yellow-50"
      >
        SignUp{" "}
      </Button>
      <Button
        type="button"
        className="rounded-xl border-2 p-2 float-right m-1 bg-yellow-50"
      >
        Login
      </Button>
    </span>
  );
};
