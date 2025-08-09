import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdFavoriteBorder } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { usePage, router } from "@inertiajs/react";

const UserProfile = ({ adoptionApplications = [], postApplications = [] }) => {
    const { auth } = usePage().props;
    const [activeSection, setActiveSection] = useState("profile");
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    console.log(adoptionApplications);

    const user = {
        name: "Anjum Hossain",
        email: "anjum@example.com",
        phone: "017XXXXXXXX",
        location: "Chahdra, Gazipur",
        bio: "Animal lover and pet adoption enthusiast.",
        avatar: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/475979620_1025661022931686_6539658198443314913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BVAiLzBo_dMQ7kNvwH3NqSN&_nc_oc=AdlKYXgtY94t75YN3MQmAZs9XX5W3tJu9OfqmK0zz_1jSDhARMPgXWk8ovxEcdJWjxk&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=R6tX9-2YoLb7D2FXo0DOLA&oh=00_AfVFJZI15SpPA_t1v66RSaeSsyVhfVy_J3cWQXO4GiNsbA&oe=689BA359",
        adoptedPets: ["Charlie", "Milo", "Bella"],
        favourites: ["Golden Retriever", "Siamese Cat"],
    };

    const statusColor = (status) => {
        switch (status) {
            case "Accepted":
                return "#22c55e";
            case "Rejected":
                return "#ef4444";
            case "Pending":
                return "#eab308";
            default:
                return "#6b7280";
        }
    };

    const handleLogout = () => {
        window.location.href = "/logout";
    };

    return (
        <div className="min-h-screen mt-16 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="bg-[#07553B]/10 shadow-md sticky top-0 z-10 flex md:flex-col justify-between md:justify-start p-3 md:p-5 md:w-64">
                <div className="hidden md:block text-center mb-6">
                    <h1 className="text-2xl font-bold pc mb-2">
                        Hello, {auth.user.name.split(" ")[0]}
                    </h1>
                    <div className="bg-[#07553B]/10 pc pc p-3 rounded-xl">
                        <p className="font-medium">{auth.user.name}</p>
                        <p className="text-sm">{auth.user.email}</p>
                    </div>
                </div>

                <nav className="flex md:flex-col gap-4 w-full justify-around md:justify-start">
                    {/* Profile */}
                    <button
                        onClick={() => setActiveSection("profile")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "profile"
                                ? "bg-[#07553B]/10 pc"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <FaRegUser size={20} />
                        <span className="hidden md:inline">My Profile</span>
                    </button>

                    {/* Adoptions */}
                    <button
                        onClick={() => setActiveSection("adoptions")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "adoptions"
                                ? "bg-[#07553B]/10 pc"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <IoMdNotificationsOutline size={20} />
                        <span className="hidden md:inline">
                            Adoption Status
                        </span>
                    </button>

                    {/* Posts */}
                    <button
                        onClick={() => setActiveSection("posts")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "posts"
                                ? "bg-[#07553B]/10 pc"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <MdFavoriteBorder size={20} />
                        <span className="hidden md:inline">Post Requests</span>
                    </button>

                    {/* Logout */}
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition hover:bg-gray-100 text-red-600"
                    >
                        <FiLogOut size={20} />
                        <span className="hidden md:inline">Logout</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-5 lg:px-10 space-y-8">
                {/* All main sections (unchanged) */}
                {activeSection === "profile" && (
                    <section className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row gap-6 glow-border">
                        <img
                            src={user.avatar}
                            alt="User Avatar"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#07553B] shadow"
                        />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold ">
                                {auth.user.name}
                            </h2>
                            <p className="text-gray-600 flex items-center gap-2">
                                <MdOutlineEmail /> {auth.user.email}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                                <IoCallOutline /> {user.phone}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                                <IoLocationOutline /> {user.location}
                            </p>
                            <p className="text-gray-700 mt-3">{user.bio}</p>
                        </div>
                    </section>
                )}

                {activeSection === "adoptions" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">
                            My Adoption Applications
                        </h2>
                        {adoptionApplications.length === 0 ? (
                            <p className="text-gray-500 text-center">
                                No applications submitted yet.
                            </p>
                        ) : (
                            <ul className="space-y-4">
                                {adoptionApplications.map((app, idx) => (
                                    <li
                                        key={idx}
                                        className="border-l-4 pl-4 py-2 bg-gray-50 rounded-md shadow-sm"
                                        style={{
                                            borderColor: statusColor(
                                                app.status
                                            ),
                                        }}
                                    >
                                        <div className="font-semibold text-[#932F67]">
                                            {app.applied_pet_name}
                                        </div>
                                        <div className="text-sm flex justify-between">
                                            <span>
                                                Status:{" "}
                                                <span
                                                    className="font-medium"
                                                    style={{
                                                        color: statusColor(
                                                            app.status
                                                        ),
                                                    }}
                                                >
                                                    {app.status}
                                                </span>
                                            </span>
                                            <span>{app.created_at}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                )}

                {activeSection === "posts" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">
                            My Post Applications
                        </h2>
                        {postApplications.length === 0 ? (
                            <p className="text-gray-500 text-center">
                                No one has applied yet.
                            </p>
                        ) : (
                            <ul className="space-y-4">
                                {postApplications.map((app, idx) => (
                                    <li
                                        key={idx}
                                        className="border-l-4 pl-4 py-2 bg-gray-50 rounded-md shadow-sm"
                                        style={{
                                            borderColor: statusColor(
                                                app.status
                                            ),
                                        }}
                                    >
                                        <div className="font-semibold text-[#932F67]">
                                            {app.applicantName}
                                        </div>
                                        <div className="text-sm flex justify-between">
                                            <span>
                                                For: {app.applied_pet_name}
                                            </span>
                                            <span>
                                                Status:{" "}
                                                <span
                                                    className="font-medium"
                                                    style={{
                                                        color: statusColor(
                                                            app.status
                                                        ),
                                                    }}
                                                >
                                                    {app.status}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {app.date}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                )}
            </main>

            {/* Logout Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
                        <h2 className="text-lg font-semibold mb-4">
                            Are you sure you want to logout?
                        </h2>
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
