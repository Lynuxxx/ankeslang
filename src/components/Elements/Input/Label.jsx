const Label = (props) => {
    const {htmlFor, className, children} = props;
    return (
        <label 
        htmlFor={htmlFor} 
        className={`block text-slate-700 text-sm font-bold mb-2 ${className}`}>{children}</label>
    )
}

export default Label;