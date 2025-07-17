import { IoMdNotificationsOutline } from "react-icons/io";


const UserProfile = () => {
    const user = {
        name: "Hafizur Rahman",
        email: "hafiz@5678.com",
        location: "Savar, Bangladesh",
        phone: "01700610483",
        avatar: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
        bio: "Pet lover and frequent adopter. Passionate about animals and their well-being."
    };

    return (
        <div className="min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10 flex gap-5 items-center justify-center">
            <div className="bg-indigo-50 rounded-3xl shadow w-full max-w-4xl p-6 md:p-10 flex flex-col gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-40 h-40 rounded-full border-4 border-gray-300 object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold text-center md:text-left">{user.name}</h2>
                    <p className="text-sm text-gray-600 text-center md:text-left">{user.location}</p>
                </div>


                <div className="md:w-2/3">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">About</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{user.bio}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-sm font-medium text-gray-600">Email</h4>
                            <p className="text-gray-800">{user.email}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-600">Phone</h4>
                            <p className="text-gray-800">{user.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-4xl">
                <div className="bg-indigo-50 rounded-3xl shadow w-full max-w-4xl p-6 md:p-10 space-y-6">
                    {/* My Adopt Request Update*/}
                    <h3 className="text-lg font-bold flex items-center text-gray-800 mb-4"><IoMdNotificationsOutline className="text-xl" /> &nbsp;
                        My Adopt Request</h3>
                    <div className="bg-white rounded-xl shadow p-6">
                        <p>Accepted the  pet id : 2</p>
                    </div>
                </div>
                <div className="bg-indigo-50 rounded-3xl shadow w-full max-w-4xl p-6 md:p-10 space-y-6">
                    {/* Manage my profile*/}
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Manage My Profile</h3>
                    <div className="rounded-xl flex flex-col gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
                            Edit Profile
                        </button>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
                            Delete Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
