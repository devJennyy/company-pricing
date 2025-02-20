import BenefitList from "@/components/BenefitList";
import { Switch } from "@/components/ui/switch";
import { BsQuestionCircle } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SharedButton from "@/components/SharedButton";

const FeaturesAndBenefits = () => {
  return (
    <div className="w-full flex justify-center items-center bg-primaryFill sm:!mt-16 !mt-7">
      <div className="w-full max-w-[1440px] mx-auto pt-16 pb-13 flex flex-col justify-center items-center gap-5 sm:px-8 px-4">
        <p className="md:text-[40px] text-2xl font-bold tracking-tight md:leading-16 leading-10 lg:px-0 md:px-10 sm:px-24">
          Detailed List Of Hello Bar Features And Benefits
        </p>
        <div className="flex justify-center items-center gap-5 text-lg font-semibold md:!mb-9 !mb-36">
          <p className="text-lightGray opacity-80">Monthly</p>
          <Switch defaultChecked />
          <p>Annually</p>
        </div>

        <div className="w-full flex justify-between items-end">
          <div className="xl:w-[300px] w-full flex-col z-10">
            {/* Table 1 */}
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-7 flex items-center bg-darkGray px-4">
                <p className="uppercase text-sm text-white font-medium">
                  Counts
                </p>
              </div>

              {/* Content Section */}
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Views</p>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Number of popups</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Number of subscribers</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Number of seats</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Table 2 */}
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-7 flex items-center bg-darkGray px-4">
                <p className="uppercase text-sm text-white font-medium">
                  Support
                </p>
              </div>

              {/* Content Section */}
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Technical support</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Table 3 */}
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-7 flex items-center bg-darkGray px-4">
                <p className="uppercase text-sm text-white font-medium">
                  Features
                </p>
              </div>

              {/* Content Section */}
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">A/B testing</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Targeting</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Table 4 */}
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-7 flex items-center bg-darkGray px-4">
                <p className="uppercase text-sm text-white font-medium">
                  Customization & Branding
                </p>
              </div>

              {/* Content Section */}
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Content upgrades</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Custom Thank You page</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Yes/No questions</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Remove HB logo</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Table 5 */}
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-7 flex items-center bg-darkGray px-4">
                <p className="uppercase text-sm text-white font-medium">
                  Integrations
                </p>
              </div>

              {/* Content Section */}
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Email integrations</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-14 flex items-center gap-2 border-b border-black/10 px-4">
                <p className="text-sm">Zapier integrations</p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BsQuestionCircle className="text-gray-500 cursor-pointer z-50" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a sample.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full h-20"></div>
            </div>
          </div>
          <BenefitList />
        </div>

        <p className="text-lightGray font-medium !mt-8">
          *All plans are billed annually
        </p>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
