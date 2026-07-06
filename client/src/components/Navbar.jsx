import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa6";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ServerURL } from "../App";
import AuthModel from "./AuthModel";
import { setUserInfo } from "../redux/userSlice";

function Navbar() {
  const { userInfo } = useSelector((state) => state.user);
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAuth, setShowAuth] = useState(false);

  const handleLogout = async () => {
    // Logout logic here
    try {
      await axios.get(ServerURL + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserInfo(null));
      setShowUserPopup(false);
      setShowCreditPopup(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={18} />
          </div>

          <h1 className="font-semibold hidden md:block text-lg">prepo.me</h1>
        </div>
        <div className="flex items-center gap-6 relative">
          <div className="relative">
            <button
              onClick={() => {
                if (!userInfo) {
                  setShowAuth(true);
                  return;
                }
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false);
              }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition"
            >
              <BsCoin size={20} />
              {userInfo?.credits || 0}
            </button>
            {showCreditPopup && (
              <div className="absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded p-5 z-50">
                <p className="text-sm text-gray-600 mb-4">
                  Need more credits to continue interviews?
                </p>

                <button
                  onClick={() => {
                    navigate("/pricing");
                  }}
                  className="w-full bg-black text-white py-2 rounded-lg text-sm"
                >
                  Buy more credits
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                if (!userInfo) {
                  setShowAuth(true);
                  return;
                }
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false);
              }}
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold"
            >
              {userInfo ? (
                userInfo?.name.slice(0, 1).toUpperCase()
              ) : (
                <FaUserAstronaut size={16} />
              )}
            </button>
            {showUserPopup && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50">
                <p className="text-md text-blue-500 font-medium mb-1">
                  {userInfo?.name}
                </p>

                <button
                  onClick={() => navigate("/history")}
                  className="w-full text-left text-sm py-2 hover:text-black text-gray-600"
                >
                  Interview History
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left text-sm py-2 flex items-center gap-2 text-red-500"
                >
                  <HiOutlineLogout size={18} />
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>

    // <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
    //   <motion.div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex items-center justify-between">
    //     {/* Left */}
    //     <div className="flex items-center gap-3">
    //       <div className="bg-black text-white p-2 rounded-lg">
    //         <BsRobot size={18} />
    //       </div>

    //       <h1 className="font-semibold text-lg">prepo.me</h1>
    //     </div>

    //     {/* Right */}
    //     <div className="flex items-center gap-4">
    //       <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
    //         <BsCoin />
    //         {userInfo?.credits}
    //       </button>

    //       <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
    //         {userInfo ? (
    //           userInfo.name.charAt(0).toUpperCase()
    //         ) : (
    //           <FaUserAstronaut />
    //         )}
    //       </button>
    //     </div>
    //   </motion.div>
    // </div>
  );
}

export default Navbar;
