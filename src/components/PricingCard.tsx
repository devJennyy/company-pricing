import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { pricingList } from "../constants/PricingData";
import SharedButton from "./SharedButton";

const PricingCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex xl:flex-row flex-col xl:gap-[3px] md:gap-[1px] gap-7">
      {pricingList?.map((items, index) => {
        return (
          <motion.div
            key={index}
            className={`z-${
              hoveredIndex === index ? "20" : "0"
            } sm:border-none border border-white focus:border-brand active:border-brand transition-default relative w-full xl:max-w-[310px] flex xl:flex-col md:flex-row flex-col xl:justify-start md:justify-between justify-start md:items-center xl:gap-6 md:gap-0 gap-6 md:shadow-xl shadow-sm xl:p-7 md:p-0 p-5 bg-white cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            transition={{ stiffness: 400, damping: 15 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="md:w-[202px] flex justify-center items-center md:flex-col">
              {/* "Most Popular" Badge Animation*/}
              {hoveredIndex === index && (
                <motion.div
                  className="xl:absolute xl:top-[-0.7rem] md:relative absolute top-[-0.7rem] px-2 py-[2px] bg-brand"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <p className="uppercase text-white xl:text-sm md:text-[12px] text-sm font-medium">
                    Most Popular
                  </p>
                </motion.div>
              )}
              <div className="w-full flex xl:justify-between md:justify-center justify-between items-center md:flex-col">
                <p className="text-[2rem]">{items.label}</p>
                <p className="text-xl font-semibold">
                ${items.price}
                  <span
                    className={`text-lg font-medium ${
                      items.isFree ? `!ml-1 text-brand` : ``
                    }`}
                  >
                    {items.isFree ? `Free Forever` : `/mo*`}
                  </span>
                </p>
              </div>
            </div>

            <div className="xl:block md:hidden w-full h-[1px] bg-stroke"></div>

            <div className="xl:w-fit md:w-[290px] flex flex-col gap-4 xl:border-0 md:border-x border-stroke xl:px-0 xl:py-0 md:px-5 md:py-6">
              {items?.benefits?.map((benefit, benefitIndex) => {
                return (
                  <div key={benefitIndex} className="flex gap-2">
                    <div className="w-full !max-w-4 !h-4 flex justify-center items-center rounded-sm bg-brand !mt-[2px]">
                      <FaCheck size={10} className="text-white" />
                    </div>
                    <p
                      className={`text-darkGray text-left text-sm ${
                        benefit.isHighlight ? `text-[15px]` : `text-sm`
                      }`}
                    >
                      {benefit.description}{" "}
                      <span className="font-bold">{benefit.highlighted}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="xl:w-full md:w-[202px] xl:p-0 md:p-5 flex flex-col justify-center items-center xl:gap-6 md:gap-3 gap-6">
              <SharedButton />
              <button className="flex justify-center items-center gap-1 text-darkGray cursor-pointer">
                <p className="capitalize text-sm">See all features</p>
                <LuChevronDown size={20} />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PricingCard;
