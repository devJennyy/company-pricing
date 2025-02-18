import { Switch } from "@/components/ui/switch";
import PricingCard from "../components/PricingCard";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray/10 !mt-16">
      <div className="w-full max-w-[1440px] mx-auto pt-23 pb-13 flex flex-col justify-center items-center gap-5">
        <p className="max-w-[1107px] text-5xl font-bold tracking-tight leading-19">
          Convert More Visitors With The Popup Builder 500,000+ Websites Use
        </p>
        <div className="flex justify-cenetr items-center gap-5 text-lg font-bold !mb-9">
          <p>Monthly</p>
          <Switch defaultChecked/>
          <p>Annually</p>
        </div>

        <PricingCard />

        <p className="text-lightGray font-medium !mt-8">
          *All plans are billed annually
        </p>
      </div>
    </div>
  );
};

export default Hero;
