import { pricingList } from "@/constants/PricingData";
import { BsQuestionCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { PiCheckBold } from "react-icons/pi";

const BenefitList = () => {
  return (
    <div className="w-full grid grid-cols-5">
      {pricingList?.map((item, index) => {
        return (
          <div key={index} className="w-full">
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-[26px]">{item.label}</p>
              <p className="text-lg font-bold">
                ${item.price}
                <span className="text-sm">/mo*</span>
              </p>
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
                              {"headerTitle" in header
                                ? header.headerTitle
                                : ""}
                            </p>
                          </div>
                        )}

                        {header?.listItems?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`w-full h-14 flex ${item.customClass} items-center gap-2 border-b border-black/10`}
                            >
                              <p className="text-sm flex items-center gap-2">
                                {"highlightedText" in item &&
                                "label" in item ? (
                                  <>
                                    <span className="font-bold">
                                      {item.highlightedText}
                                    </span>{" "}
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
        );
      })}
    </div>
  );
};

export default BenefitList;
