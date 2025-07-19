import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";

const Layout = ({ children }) => (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
