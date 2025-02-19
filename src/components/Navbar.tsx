import { navLinks } from "@/constants/navLinks";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-center items-center bg-white shadow-lg shadow-gray-300/30 z-30">
      <div className="relative w-full max-w-[1440px] mx-auto h-[72px] flex justify-between items-center px-5">
        <div className="w-24">
          <img src="/logo.svg" alt="sample logo" className="w-full h-full object-contain"/>
        </div>

        {/* Web Menu */}
        <ul className="hidden 2xl:flex justify-center items-center gap-12">
          {navLinks.map(({ label, classType, isSelected }) => {
            return (
              <li key={label}>
                <button
                  className={`text-lg cursor-pointer hover:text-gray transition-colors duration-200 ease-out ${
                    classType
                      ? `border border-brand hover:bg-brand hover:text-white transition-all duration-300 ease-out rounded-sm px-11 py-2`
                      : ""
                  } ${isSelected ? "text-gray" : ""}`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <div className="relative 2xl:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <RxHamburgerMenu size={28} className="text-brand" />
          </button>

          {/* Dark background overlay */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
                onClick={() => setShowMenu(false)}
              />
            )}
          </AnimatePresence>

          {/* Sliding menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 md:w-[40%] w-[65%] h-screen bg-white shadow-2xl z-20"
              >
                <IoClose
                  size={32}
                  className="absolute right-3 top-3 text-brand"
                  onClick={() => setShowMenu(false)}
                />
                <ul className="w-full h-full flex flex-col justify-center items-center gap-12">
                  {navLinks.map(({ label, classType, isSelected }) => {
                    return (
                      <li key={label}>
                        <button
                          className={`sm:text-xl text-lg font-semibold cursor-pointer hover:text-brand transition-colors duration-200 ease-out ${
                            classType
                              ? `bg-brand hover:bg-brand text-white hover:text-brand transition-all duration-300 ease-out rounded-sm px-11 py-2`
                              : ""
                          } ${isSelected ? "text-brand" : ""}`}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
