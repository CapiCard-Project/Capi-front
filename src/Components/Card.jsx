import React from "react";

const Card = () => {
  return (
    <div className="relative flex flex-col gap-4 p-4 w-76 bg-gradient-to-r from-gray-900 via-purple-800 to-transparent rounded-xl shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-400 rounded-xl -z-10" />
      <div className="z-10">
        <h2 className="text-white text-lg font-bold">Explosive Growth</h2>
        <p className="text-gray-300 text-xs mt-1 w-2/3">
          Perfect for your next content, leave it to us and enjoy the result!
        </p>
      </div>
      <hr className="border-t border-gray-700 w-full" />
      <ul className="flex flex-col gap-2">
        {[
          "10 Launch Weeks",
          "10 Influencers Post",
          "100,000 Views",
          "10 Reddit Posts",
          "2 Hours Marketing Consultation",
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3 h-3 text-gray-900"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="text-white text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <button className="cursor-pointer w-full py-2 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full text-white text-sm font-semibold shadow-inner">
        Book a Call
      </button>
    </div>
  );
};

export default Card;
