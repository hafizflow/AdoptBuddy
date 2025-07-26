import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const ErrorPage = () => {
    return (
        <div className="bg-[#f9f8eb] min-h-screen  flex flex-col gap-2 justify-center items-center px-5 lg:px-20">
            <img className='w-1/9' src={logo} alt="" />
            <h1 className="text-3xl font-bold text-center text-amber-950">Oops! Page Not Found</h1>
            <p className="text-center text-amber-950">The page you are looking for does not exist.</p>
            <Link to='/'><Button>Go Back Home Page</Button></Link>
        </div>
    );
};

export default ErrorPage;