import { sampleLogo } from "@/constants/featuredWebsiteData";

const FeaturedWebsites = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1440px] mx-auto md:py-20 py-16 flex flex-col justify-center items-center gap-12 2xl:px-26 px-5">
        <p className="md:text-[40px] text-2xl font-bold tracking-tight md:leading-16 leading-10 lg:px-0 md:px-10 sm:px-24">
          Pricing is Used On The World's Top-Converting Websites
        </p>

        <div className="w-full grid sm:grid-cols-4 grid-cols-2">
          {sampleLogo?.map((logo, index) => (
            <div
              key={index}
              className="w-full h-[164px] flex justify-center items-center border border-secondaryStroke p-5"
            >
              <div className="w-full h-[96px]">
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWebsites;
