import { Switch } from "@/components/ui/switch";

const FeaturesAndBenefits = () => {
  return (
    <div className="w-full flex justify-center items-center bg-primaryFill sm:!mt-16 !mt-7">
      <div className="w-full max-w-[1440px] mx-auto pt-23 pb-13 flex flex-col justify-center items-center gap-5 px-5">
        <p className="md:text-[40px] text-2xl font-bold tracking-tight md:leading-16 leading-10 lg:px-0 md:px-10 sm:px-24">
          Detailed List Of Hello Bar Features And Benefits
        </p>
        <div className="flex justify-cenetr items-center gap-5 text-lg font-semibold !mb-9">
          <p className="text-lightGray opacity-80">Monthly</p>
          <Switch defaultChecked />
          <p>Annually</p>
        </div>

        <p className="text-lightGray font-medium !mt-8">
          *All plans are billed annually
        </p>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
