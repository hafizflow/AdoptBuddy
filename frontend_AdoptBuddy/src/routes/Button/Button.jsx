const Button = ({
    children,
    variant = "primary",
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    const baseStyle =
        "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

    const variants = {
        primary:
            "text-white bg-indigo-500 hover:shadow-indigo-500/50",
        outline:
            "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500",
        ghost:
            "text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-400",
        success:
            "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
        danger:
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    const disabledStyle =
        "opacity-50 cursor-not-allowed";

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
