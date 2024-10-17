const Button = (props) => {
    const { children, className, type="button", onClick} = props;
    return (
        <button
            className={`${className} h-10 px-6 font-semibold rounded-md`}
            type={type}
            onClick={onClick}
        >
        {children}
        </button>
    );
};

export default Button;
