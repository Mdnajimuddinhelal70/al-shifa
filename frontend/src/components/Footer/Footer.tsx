import { navigation } from '@/constants';
import Link from 'next/link';

const Footer = () => {
    return (
       <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white border-t-2">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
            <h2>Logo hare</h2>
            <p className="mt-6 text-sm">
            Al Shifa Diagnostic Center is a modern healthcare facility dedicated to providing accurate and reliable diagnostic services using advanced medical technologies. With experienced doctors and skilled technologists, we ensure every step of the diagnostic process is handled with the utmost care—so you and your family can stay confident about your health.
            </p>

        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                <ul className="text-sm space-y-2">
                   {navigation.map((item, index) => (
                     <li key={index}><Link href={item.href}>{item.title}</Link></li>
                   ))}
    
                </ul>
            </div>
            <div>
                <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                <div className="text-sm space-y-2">
                    <p>+1-212-456-7890</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
    <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © Company name. All Right Reserved.
    </p>
</footer>
    );
};

export default Footer;