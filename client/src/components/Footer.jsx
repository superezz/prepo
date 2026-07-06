import React from "react";
import { BsRobot, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm px-8 py-10">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-3">
                <div className="bg-black text-white p-3 rounded-xl">
                  <BsRobot size={20} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">Prepo.me</h2>
              </div>

              <p className="text-gray-500 max-w-md leading-relaxed">
                AI-powered interview preparation platform designed to improve
                communication skills, technical depth and professional
                confidence.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#" className="text-gray-500 hover:text-black transition">
                Home
              </a>

              <a
                href="#features"
                className="text-gray-500 hover:text-black transition"
              >
                Features
              </a>

              <a
                href="#about"
                className="text-gray-500 hover:text-black transition"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-gray-500 hover:text-black transition"
              >
                Contact
              </a>

              <a href="#" className="text-gray-500 hover:text-black transition">
                Privacy
              </a>

              <a href="#" className="text-gray-500 hover:text-black transition">
                Terms
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Prepo.me. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <BsGithub size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <BsLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import { BsRobot } from 'react-icons/bs';

// function Footer() {
//   return (
//     <div className="bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10">
//       <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center">
//         <div className="flex justify-center items-center gap-3 mb-3">
//           <div className="bg-black text-white p-2 rounded-lg">
//             <BsRobot size={16} />
//           </div>

//           <h2 className="font-semibold">InterviewIQ.AI</h2>
//         </div>

//         <p className="text-gray-500 text-sm max-w-xl mx-auto">
//           AI-powered interview preparation platform designed to improve
//           communication skills, technical depth and professional confidence.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
