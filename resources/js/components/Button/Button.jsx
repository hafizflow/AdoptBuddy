const Button = ({
    children,
    variant = "primary",
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    const baseStyle =
        "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer";

    const variants = {
        // primary: "text-white bg-[#E13452] hover:bg-[#8ABB6C]"
        primary: "text-white bg-[#07553B] hover:bg-[#CED46A] hover:text-[#07553B]"
    };

    const disabledStyle = "opacity-50 cursor-not-allowed";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variants[variant]} ${disabled ? disabledStyle : ""
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
