import { banner } from "@/constants";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "../Button/Button";
import Container from "../Container";

const Banner = () => {
  return (
    <div className="py-20 text-themeWhite border-b-[1px] bg-gradient-to-r from-[#4b3621] via-[#3b7a57] to-[#d4af37] rounded-md">
      <Container className="flex flex-col-reverse gap-10 md:flex-row md:items-center justify-between">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-[500px]">
            {banner?.title}
          </h2>
          <p className="text-base md:text-lg font-medium text-white/90">
            {banner?.para}
          </p>
          <Button
            href={banner?.buttonLink}
            className="flex items-center gap-2 bg-themeWhite rounded-md w-fit px-6 py-3 text-sm font-semibold hover:bg-transparent hover:text-white border border-transparent hover:border-white duration-200"
          >
            Explore <GoArrowRight className="text-lg" />
          </Button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://i.ibb.co.com/wNhTH8NQ/Chat-GPT-Image-May-2-2025-03-21-07-PM.png"
            alt="bannerImage"
            width={500}
            height={400}
            priority
            className="rounded-xl shadow-xl h-auto w-full max-w-[500px] object-cover"
          />
        </div>

      </Container>
    </div>
  );
};

export default Banner;
