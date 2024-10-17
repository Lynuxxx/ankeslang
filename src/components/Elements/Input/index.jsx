import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const { name, children, type, className, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name} className={className}>{children}</Label>
            <Input 
                type={type} 
                placeholder={placeholder} 
                name={name}/>
        </div>
    )
}

export default InputForm;