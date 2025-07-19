import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-amber-500">Adoptbuddy</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Connecting loving hearts to pets in need. Find your furry friend today.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><a href="/" className="hover:text-teal-300">Home</a></li>
                        <li><a href="/adopt" className="hover:text-teal-300">Adopt</a></li>
                        <li><a href="/about" className="hover:text-teal-300">About Us</a></li>
                        <li><a href="/contact" className="hover:text-teal-300">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media & Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-300 hover:text-teal-300"><FaFacebookF /></a>
                        <a href="#" className="text-gray-300 hover:text-teal-300"><FaTwitter /></a>
                        <a href="#" className="text-gray-300 hover:text-teal-300"><FaInstagram /></a>
                        <a href="mailto:hossain15-5801@diu.edu.bd" className="text-gray-300 hover:text-teal-300"><FaEnvelope /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-8">
                &copy; {new Date().getFullYear()} Adoptbuddy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
