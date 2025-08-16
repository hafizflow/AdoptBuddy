import logo from "../../../assets/logo.png";
import Button from "../../components/Button/Button";

const ErrorPage = () => {
    return (
        <div className="min-h-screen  flex flex-col gap-2 justify-center items-center px-5 lg:px-20">
            <img className="w-1/9" src={logo} alt="" />
            <h1 className="text-3xl font-bold text-center pc">
                Oops! Page Not Found
            </h1>
            <p className="text-center pc">
                The page you are looking for does not exist.
            </p>
            <a href="/">
                <Button>Go Back Home Page</Button>
            </a>
        </div>
    );
};

export default ErrorPage;
