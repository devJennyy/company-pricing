import { footerLinks } from "@/constants/footerLinks";
import SharedButton from "./SharedButton";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-primaryFill">
      <div className="max-w-[1440px] mx-auto md:py-28 sm:py-20 py-16 px-10">
        <div className="md:w-[650px] w-full flex flex-col gap-7">
          <p className="text-2xl font-bold">
            Start Building Your Email List in Just 5 Minutes
          </p>
          <div className="w-full sm:h-12 flex sm:flex-row flex-col justify-center items-center gap-3">
            <input
              placeholder="Enter your website URL"
              className="md:w-[200%] sm:w-[160%] w-full h-12 font-medium border outline-none pl-5 rounded-sm !mt-1"
            />
            <SharedButton type={"secondary"} hasIcon={true} />
          </div>
        </div>
      </div>

      <div className="w-full xl:h-12 flex justify-center items-center bg-brand">
        <div className="sm:hidden w-full max-w-[1440px] xl:flex lg:flex-row flex-col justify-between items-center px-16">
          {footerLinks?.map((item, index) => {
            return (
              <button
                key={index}
                className="px-5 py-2 cursor-pointer transition-default text-white hover:text-gray focus:text-gray active:text-gray"
              >
                <p className="text-sm">{item.label}</p>
              </button>
            );
          })}
        </div>
        <div className="xl:hidden hidden w-full sm:flex text-left">
          <p className="text-white text-sm px-5 py-2">
            This site uses cookies to ensure we give you the best experience on
            our webiste. Please press the Accept button to agree to our use of
            cookies to collect data.
            <span className="underline !ml-1">Find out more</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
