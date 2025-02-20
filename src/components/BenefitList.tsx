import { featuredBenefit } from "@/constants/featuredBenefitData";
import { BsQuestionCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { PiCheckBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import SharedButton from "./SharedButton";

const BenefitList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="hidden w-full xl:flex">
        {featuredBenefit?.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={index}
              className="relative w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                boxShadow: isHovered
                  ? "0px 10px 20px rgba(0, 0, 0, 0.15)"
                  : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* "Most Popular" Badge */}
              <motion.div
                className="xl:absolute xl:top-[-0.7rem] md:relative absolute top-[-0.7rem] left-1/2 -translate-x-1/2 px-2 py-[2px] bg-brand rounded-[2px]"
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="uppercase text-white xl:text-sm md:text-[12px] text-sm font-medium">
                  Most Popular
                </p>
              </motion.div>

              {/* Column Content */}
              <div className="flex flex-col justify-center items-center p-4 !mt-2">
                <p className={`text-[26px] ${isHovered ? "text-brand" : ""}`}>
                  {"label" in item ? item.label : "\u00A0"}
                </p>

                {"price" in item ? (
                  <p className="text-lg font-bold">
                    ${item.price}
                    {item.isFree ? (
                      <span className="!ml-1 text-sm text-brand font-medium">
                        Free Forever
                      </span>
                    ) : (
                      <span className="text-sm font-medium">/mo*</span>
                    )}
                  </p>
                ) : (
                  <p className="text-lg font-bold">
                    &nbsp;
                    <span className="text-sm">&nbsp;</span>
                  </p>
                )}
              </div>

              {/* Table Data */}
              {item?.tableList?.map((list, listIndex) => (
                <div key={listIndex}>
                  {list?.table?.map((header, headerIndex) => (
                    <div key={headerIndex}>
                      {header.hasHeader && (
                        <div className="w-full h-7 flex justify-start items-center bg-darkGray px-4">
                          <p className="uppercase text-sm text-white font-medium text-left">
                            {header.hasHeader}
                          </p>
                        </div>
                      )}

                      {header?.listItems?.map((listItem, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`w-full ${
                            "height" in listItem ? "h-20" : "h-14"
                          } flex ${listItem.customClass} items-center gap-2 ${
                            "hasNoBorderB" in listItem ? "" : "border-b"
                          } border-black/10`}
                        >
                          <p className="text-sm inline">
                            {"highlightedText" in listItem &&
                            "label" in listItem ? (
                              <>
                                <span className="font-bold">
                                  {listItem.highlightedText}
                                </span>
                                {listItem.label}
                              </>
                            ) : "label" in listItem ? (
                              listItem.label
                            ) : "checkIcon" in listItem ? (
                              listItem.checkIcon ? (
                                <PiCheckBold size={18} className="text-brand" />
                              ) : (
                                <IoClose size={20} className="text-lightGray" />
                              )
                            ) : null}
                          </p>

                          {listItem.hasIcon ? (
                            <BsQuestionCircle />
                          ) : (
                            <div> </div>
                          )}

                          {"hasButton" in listItem ? (
                            <div className="w-full !mr-4 overflow-visible z-20">
                              <SharedButton />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>
      <div className="absolute right-0 md:px-0 sm:px-10 px-4 md:w-[400px] w-full xl:hidden md:bg-white md:drop-shadow-[6px_0_10px_rgba(0,0,0,0.1)] md:relative overflow-visible z-0">
        <div className="w-fit xl:absolute xl:top-[-0.7rem] absolute top-[-0.7rem] left-1/2 -translate-x-1/2 px-2 py-[2px] bg-brand z-10 rounded-[2px]">
          <p className="uppercase text-white xl:text-sm md:text-[12px] text-sm font-medium">
            Most Popular
          </p>
        </div>
        <Swiper
          effect="slide"
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper relative"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {featuredBenefit?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="md:relative w-full !mt-3">
                  <div className="flex flex-col justify-center items-center p-4">
                    <p
                      className={`text-[26px] ${
                        activeIndex === index ? "text-brand" : ""
                      }`}
                    >
                      {"label" in item ? item.label : "\u00A0"}
                    </p>

                    {"price" in item ? (
                      <p className="text-lg font-bold">
                        ${item.price}
                        {item.isFree ? (
                          <span className="!ml-1 text-sm text-brand font-medium">
                            Free Forever
                          </span>
                        ) : (
                          <span className="text-sm font-medium">/mo*</span>
                        )}
                      </p>
                    ) : (
                      <p className="text-lg font-bold">
                        &nbsp;
                        <span className="text-sm">&nbsp;</span>
                      </p>
                    )}
                  </div>
                  {item?.tableList?.map((list, index) => {
                    return (
                      <div key={index}>
                        {list?.table?.map((header, index) => {
                          return (
                            <div key={index}>
                              {header.hasHeader && (
                                <div className="w-full h-7 flex justify-start items-center bg-darkGray px-4">
                                  <p className="uppercase text-sm text-white font-medium text-left">
                                    {header.hasHeader}
                                  </p>
                                </div>
                              )}

                              {header?.listItems?.map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={`w-full ${
                                      "height" in item ? "h-20" : "h-14"
                                    } flex ${
                                      item.customClass ? "justify-end" : ""
                                    } md:${
                                      item.customClass ?? "justify-end"
                                    } items-center gap-2 ${
                                      "hasNoBorderB" in item ? "" : "border-b"
                                    } border-black/10`}
                                  >
                                    <p className="text-sm inline">
                                      {"highlightedText" in item &&
                                      "label" in item ? (
                                        <>
                                          <span className="font-bold">
                                            {item.highlightedText}
                                          </span>
                                          {item.label}
                                        </>
                                      ) : "label" in item ? (
                                        item.label
                                      ) : "checkIcon" in item ? (
                                        item.checkIcon ? (
                                          <PiCheckBold
                                            size={18}
                                            className="text-brand"
                                          />
                                        ) : (
                                          <IoClose
                                            size={20}
                                            className="text-lightGray"
                                          />
                                        )
                                      ) : null}
                                    </p>

                                    {item.hasIcon ? (
                                      <BsQuestionCircle />
                                    ) : (
                                      <div> </div>
                                    )}

                                    {"hasButton" in item ? (
                                      <div className="w-full !mr-4 md:px-0 sm:px-32 px-10 overflow-visible z-20">
                                        <SharedButton />
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default BenefitList;
