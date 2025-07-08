

const UserProfile = () => {
    const user = {
        name: "Hafizur Rahman",
        email: "hafiz@5678.com",
        location: "Savar, Bangladesh",
        phone: "01700610483",
        avatar: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/485799207_632430909579629_5235868226780574381_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iYa3Fx18urQQ7kNvwFxpYXv&_nc_oc=AdlmOHPl71BB6R543BgMKFhlNa8IPl7bSAp6JBOXWsuvtQyWunlvkEUKwZhqgl7J0ko&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=ts4_KdNxcB8urYu28TeK9A&oh=00_AfTaEc1LASKC_m4M2OKJyP8UKCJY8Y_Ayp2o83symbaKyA&oe=687319BB",
        bio: "Pet lover and frequent adopter. Passionate about animals and their well-being."
    };

    return (
        <div className="min-h-screen bg-[#f9f8eb] px-5 lg:px-20 py-8 space-y-10 flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-md w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
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

                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
