import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
                name="fullName"
                type="text"
                placeholder="insert your fullname here...">
                Fullname
            </InputForm>
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
            <InputForm 
                name="confirmPassword" 
                type="password" 
                placeholder="********">
                Confirm Password
            </InputForm>
            <Button className="text-slate-50 bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;
