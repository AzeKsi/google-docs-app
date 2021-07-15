import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";
import Icon from "@material-tailwind/react/Icon";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Icon name="description" size="5xl" color="blue" />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
