import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";

const HeaderIcon = () => {
    return (
        <>
           <Link href={"/favorite"} className="text-2xl relative">
            <MdFavoriteBorder />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-lime-800 text-white rounded-full flex items-center justify-center">0</span>
           </Link>
        </>
    );
};

export default HeaderIcon;