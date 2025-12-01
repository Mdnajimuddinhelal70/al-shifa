import { services } from "@/constants/productData";
import Image from "next/image";
import Container from "../Container";

const Service = () => {
    return (
      <Container className="mb-6">
        <h1 className="flex gap-2 md:text-4xl bg-gradient-to-r from-yellow-400 via-orange-500 to-[#18eb05] bg-clip-text text-transparent items-center font-extrabold mt-3 py-2 text-2xl mb-2 uppercase">Our Services...</h1>
       <div className="grid grid-cols md:grid-cols-3 gap-3.5">
        {services?.map((item, index) => (
             <div key={index} className="p-4 bg-[#082f2a] text-white rounded-lg shadow-sm text-sm max-w-80">
             <Image className="rounded-md max-h-40 w-full object-cover" src={item?.image} alt="officeImage" height={300} width={500} />
             <p className="text-xl font-semibold ml-2 mt-2">{item?.name}</p>
             <p className="text-gray-500 mt-3 ml-2">{item?.description}</p>
             <button
                type="button"
                className="flex gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-[#18eb05] bg-clip-text text-xl border-b-4 border-transparent hover:border-b-emerald-300 transition-all duration-300 text-transparent items-center font-extrabold mt-3 py-2"
                >
                Learn More
                </button>

            </div>
        ))}
       </div>
   </Container>
    );
};

export default Service;