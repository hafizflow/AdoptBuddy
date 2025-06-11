

const Button = ({ children, variant = "primary", onClick, type = "button", className = "" }) => {
    const baseStyle = "btn bg-[#f9f8eb] transition md:text-xl border-[#c8bca8] duration-200 px-20 py-5 rounded-xl font-semibold";
    const variants = {
        primary: "hover:bg-amber-950 hover:text-white",
        outline: "btn-outline hover:bg-amber-600 hover:text-white",
        success: "bg-green-600 hover:bg-green-800 text-white",
    };
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;