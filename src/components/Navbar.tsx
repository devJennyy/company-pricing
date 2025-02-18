import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center items-center bg-white shadow-lg shadow-gray-300/30 z-10">
      <div className="w-full max-w-[1440px] mx-auto h-[72px] flex justify-between items-center px-5">
        <div className="text-xl font-bold border-2 px-3 py-2">Company Logo</div>
        <ul className="flex justify-center items-center gap-12">
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
      </div>
    </nav>
  );
};

export default Navbar;
