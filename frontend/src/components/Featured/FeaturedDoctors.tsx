import { featuredData } from "@/constants/featuredData";
import Image from "next/image";
import Container from "../Container";

const FeaturedDoctors = () => {
    return (
    <Container>
        <h1 className="text-center text-4xl text-amber-600 font-semibold mb-5 border-b-[1px]">Featured Doctors</h1>
     <div className="md:grid grid-cols-2 gap-4">
         {featuredData.map((item, index) => (
        <div key={index} className="">
    <div className="p-5 mb-2 rounded-2xl shadow hover:shadow-lg transition bg-emerald-500 text-black">
        <Image src={item.photo} alt="doctorImage" className="rounded-full mx-auto" width={250} height={250} />
        <h3 className="text-xl font-semibold text-center mt-4">{item.name}</h3>
        <p className="text-center text-sm text-gray-500">{item.specialization}</p>
        <p className="text-center text-sm mt-2">{item.experience}</p>
        <div className="flex justify-center mt-4">
        <button className="bg-green-600 text-white px-4 py-1 rounded">Book Appointment</button>
        </div>
    </div>
    </div>
    ))}
     </div>
    </Container>

    );
};

export default FeaturedDoctors;