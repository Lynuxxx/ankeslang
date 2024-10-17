import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm 
                name="email" 
                type="email" 
                placeholder="example@mail.com">
                Email
            </InputForm>
            <InputForm 
                name="password" 
                type="password" 
                placeholder="********">
                Password
            </InputForm>
            <Button className="text-slate-50 bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;
