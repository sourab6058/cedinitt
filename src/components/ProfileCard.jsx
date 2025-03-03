const ProfileCard = ({ image, name, desgn, post, email, phone }) => {
  return (
    <div className="w-full h-100 max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden text-center">
      <div className="flex flex-col items-center p-6">
        {/* Profile Image */}
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Designation */}
        <p className="text-sm text-gray-500 mt-1">{desgn}</p>
        <p className="text-xs text-gray-400 mt-1 italic">{post}</p>

        {/* Email */}
        {email.trim().length > 0 && (
          <div className="flex items-center mt-4 text-blue-600">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a
              href="mailto:sarah@designteam.com"
              className="text-sm hover:underline"
              target="_blank"
            >
              {email}
            </a>
          </div>
        )}
        {phone.trim().length > 0 && (
          <p className="text-sm text-gray-500 mt-1">{phone}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
