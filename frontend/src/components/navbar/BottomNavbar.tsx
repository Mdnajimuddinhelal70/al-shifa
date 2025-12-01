import { navigation } from "@/constants";
import Link from "next/link";
import Container from "../Container";


const BottomNavbar = () => {
    return (
        <div className="border-b border-gray-400 hidden md:block">
           <Container className="md:flex items-center justify-between py-2">
            <div className="text-xs md:text-sm font-medium flex items-center gap-2 md:gap-5">
            {
                navigation?.map((item, index) => (
                    <Link href={item?.href} key={index} className="hover:text-cyan-400 duration-200">
                    {item?.title}
                    </Link>
                ))
            }
            <Link href={"/signin"} className="hover:text-cyan-400 duration-200"> Please signin to view your cart
            </Link>
            </div>
            <p className="hidden md:inline-flex text-sm font-medium">
              Hotline: <span className="">+88 01796427670</span>
            </p>
           </Container>
        </div>
    );
};

export default BottomNavbar;
