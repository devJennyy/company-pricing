import { Switch } from "@/components/ui/switch";
import PricingCard from "../components/PricingCard";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div className="w-full h-screen bg-gray/10" />;
  }

  return (
    <div className="w-full flex justify-center items-center bg-gray/10 sm:!mt-16 !mt-7">
      <div className="w-full max-w-[1440px] mx-auto pt-23 pb-13 flex flex-col justify-center items-center gap-5 px-5">
        <div>
          <p className="hidden xl:block max-w-[1107px] 2xl:text-5xl text-5xl font-bold tracking-tight leading-19">
            Convert More Visitors With The Popup Builder 500,000+ Websites Use
          </p>
          <p className="xl:hidden md:block hidden max-w-[1107px] 2xl:text-5xl text-5xl font-bold tracking-tight leading-19">
            Convert More Visitors With The <br />
            Popup Builder <br />
            500,000+ Websites Use
          </p>
          <p className="md:hidden max-w-[1107px] text-2xl font-bold tracking-tight leading-10">
            Convert More Visitors With The Popup Builder
            <br />
            500,000+ Websites Use
          </p>
          <div className="flex justify-center items-center gap-5 text-lg font-semibold !mb-9">
            <p className="text-lightGray opacity-80">Monthly</p>
            <Switch defaultChecked />
            <p>Annually</p>
          </div>
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
