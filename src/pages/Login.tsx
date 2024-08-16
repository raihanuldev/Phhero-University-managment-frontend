import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utilities/verifyToken";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { isError, data }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onsubmit = async (data) => {
    const toastId = toast.loading("Loginingggggggggg")
    try {
      const res = await login(data).unwrap();
      // verifytoken to get userData
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashbord`)
      toast.success("Login Succesfully Mera User",toastId)
    } catch (err) {
      console.log(err);
      toast.error("something Went Wrong!",toastId)
    }
  };
  return (
    <form id="formArea" onClick={handleSubmit(onsubmit)}>
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
