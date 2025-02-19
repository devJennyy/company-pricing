import { servicesData } from "@/constants/servicesData";

const ServicesOffered = () => {
  return (
    <div className="w-full flex justify-center items-center sm:mt-16 mt-7">
      <div className="w-full max-w-[1440px] mx-auto md:py-20 py-16 flex flex-col justify-center items-center md:gap-12 gap-5 xl:px-32 lg:px-32 md:px-5 sm:px-36 px-3">
        <p className="md:text-[40px] text-2xl font-bold tracking-tight md:leading-16 leading-10 xl:px-0 lg:px-24 md:px-20 sm:px-5">
          We Also Offer These Professional Services
        </p>

        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {servicesData?.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center gap-4 p-6"
            >
              <div className="w-[160px] h-[80px] relative">
                <img
                  src={item.image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl font-semibold text-center">
                {item.mainText}
              </p>
              <p className="text-sm text-center text-darkGray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;
