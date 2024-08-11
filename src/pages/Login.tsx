import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
    const {register, handleSubmit} = useForm()

    const onsubmit =(data)=>{
        console.log(data);
    }
    return (
        <form onClick={handleSubmit(onsubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" {...register('password')}/>
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;