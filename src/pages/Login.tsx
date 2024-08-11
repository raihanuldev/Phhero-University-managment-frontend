import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utilities/verifyToken";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { isError, data }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onsubmit = async (data) => {
    const res = await login(data).unwrap();
    // verifytoken to get userData
    const user = verifyToken(res.data.accessToken);
    console.log(user);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  return (
    <form onClick={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
