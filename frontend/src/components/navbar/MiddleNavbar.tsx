
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import Container from "../Container";
import HeaderIcon from "./HeaderIcon";
import MobileNavigation from "./MobileNavigation";


const MiddleNavbar = () => {
    return (
        <div className="border-b-[1px] border-b-gray-400">


        <Container className="flex items-center gap-4 md:gap-6 lg:gap-20 justify-between">
          <Link href={"/"}>
          <h1 className="flex gap-2 md:text-2xl sm:text-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-[#18eb05] bg-clip-text text-transparent items-center font-extrabold mt-1 py-2"> আল-শিফা ডায়াগনিস্টিক সেন্টার</h1>
          </Link>
           <div className="hidden md:inline-flex items-center gap-3">
               <Link href={"/login"} className="flex gap-2 items-center text-sm">
               <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
                   <LiaUser />
               </div>
               <div>
                   <p className="text-xs">Hello, Guest</p>
                   <p className="font-medium">Login</p>
               </div>
               </Link>
               {/* Header  icon */}
               <HeaderIcon />
           </div>
          <MobileNavigation />
           </Container>
       </div>
    );
};

export default MiddleNavbar;