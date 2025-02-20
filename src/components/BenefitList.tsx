import { featuredBenefit } from "@/constants/featuredBenefitData";
import { BsQuestionCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { PiCheckBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BenefitList = () => {
  return (
    <Swiper
      effect="slide"
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-[360px]"
    >
        {featuredBenefit?.map((item) => {
          return (
            <SwiperSlide>
              <div className="w-full">
                <div className="flex flex-col justify-center items-center p-4">
                  <p className="text-[26px]">
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
                                  className={`w-full h-14 flex ${item.customClass} items-center gap-2 border-b border-black/10`}
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
  );
};

export default BenefitList;
