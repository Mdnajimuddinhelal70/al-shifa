import foundersData from '@/constants/foundersData';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Container from '../Container';

const Founders = () => {
    return (
        <Container>
            <h2 className='text-3xl font-semibold text-center mb-6 border-b pb-2'>
                Founders & Visionaries
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center mb-12'>
                {foundersData?.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center justify-between py-8 px-4 text-sm border border-gray-300/60 w-72 min-h-[320px] rounded-lg cursor-pointer hover:border-blue-600 transition duration-300"
                    >
                        <Image
                            className="rounded-full object-cover"
                            src={item?.image}
                            alt={item?.name}
                            height={96}
                            width={96}
                        />
                        <h2 className="text-gray-200 group-hover:text-white text-lg font-semibold mt-4">
                            {item?.name}
                        </h2>
                        <p className="text-center text-gray-100 group-hover:text-white/60 w-3/4 mt-2">
                            {item?.designation}
                        </p>
                        <div className="flex items-center space-x-4 mt-4 text-gray-500 group-hover:text-white text-2xl">
                           <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
                            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-blue-500" />
                            </a>
                            <a href="https://wa.me/8801796427670" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:text-green-500" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-700" />
                            </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Founders;
