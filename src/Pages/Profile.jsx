import NavBar from "../Components/NavBar"
import default_profile from "../assets/default_profile.png"
import { useContext } from "react"
import { UserContext } from "../provaider/UserProvider"
import { IoImages } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoStorefrontSharp } from "react-icons/io5";

function Profile() {

  //provaider
  const { userImage } = useContext(UserContext);

  return (
    <div className="flex flex-col bg-gradient-to-bl bg-primary w-full h-screen overflow-y-hidden">
      <NavBar />

      <div className="flex flex-col md:flex-row items-center  justify-start w-full h-full my-2">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 w-[95%] md:w-1/4 h-[600px] mx-2 rounded-[30px] shadow-xl pt-2">
          {
            userImage != null ? <img src={userImage} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full" />: <img src={default_profile} className="w-[100px] md:w-[150px]" />
          }
          <h1 className="text-xl md:text-xl font-bold text-white mt-5">
            @username
          </h1>

        <div className="flex flex-col w-full h-auto justify-start items-center mt-5 px-5 gap-y-5">
          <button className="flex items-center ml-5 mr-5 w-full bg-slate-900 py-3 px-5 rounded-[30px] hover:bg-slate-800">
            <IoImages className="text-white md:text-lg mr-2" />
            <span className="text-white font-extralight text-sm md:text-lg">Change Image</span>
          </button>

          <button className="flex items-center ml-5 mr-5 w-full bg-slate-900 py-3 px-5 rounded-[30px] hover:bg-slate-800">
            <IoSettingsSharp className="text-white md:text-lg mr-2" />
            <span className="text-white font-extralight text-sm md:text-lg">Settings</span>
          </button>

          <button className="flex items-center ml-5 mr-5 w-full bg-slate-900 py-3 px-5 rounded-[30px] hover:bg-slate-800">
            <IoStorefrontSharp className="text-white md:text-lg mr-2" />
            <span className="text-white font-extralight text-sm md:text-lg">Store</span>
          </button>

        </div>


        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 w-[95%] md:w-1/2 h-[98%] mx-2 my-2 rounded-[30px] shadow-xl">
          <h3>hola</h3>

        </div>

      </div>


    </div>
  )
}

export default Profile
