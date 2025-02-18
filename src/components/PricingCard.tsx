import { FaCheck } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { pricingList } from "../constants/PricingData";

const PricingCard = () => {
  return (
    <div className="flex 2xl:flex-row flex-col gap-[3px]">
      {pricingList?.map((items, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-[310px] flex flex-col justify-start gap-6 shadow-xl p-7 bg-white hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="flex flex-col">
              <p className="text-[2rem]">{items.label}</p>
              <p className="text-2xl font-medium">
                {items.price}
                <span
                  className={`text-lg font-regular ${
                    items.isFree ? `!ml-1 text-brand` : ``
                  }`}
                >
                  {items.isFree ? `Free Forever` : `/mo*`}
                </span>
              </p>
            </div>

            <div className="w-full h-[1px] bg-stroke"></div>

            <div className="flex flex-col gap-4">
              {items?.benefits?.map((items, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <div className="w-full !max-w-4 !h-4 flex justify-center items-center rounded-sm bg-brand !mt-[2px]">
                      <FaCheck size={10} className="text-white" />
                    </div>
                    <p
                      className={`text-darkGray text-left text-sm ${
                        items.isHighlight ? `text-[15px]` : `text-sm`
                      }`}
                    >
                      {items.description}{" "}
                      <span className="font-bold">{items.highlighted}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <button className="w-full h-12 flex justify-center items-center bg-brand !mt-1 cursor-pointer">
              <p className="text-white text-[15px] font-medium">Get Started</p>
            </button>
            <button className="flex justify-center items-center gap-1 text-darkGray cursor-pointer">
              <p className="capitalize text-sm">See all features</p>
              <LuChevronDown size={20} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
