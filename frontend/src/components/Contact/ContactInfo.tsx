import { FaClock, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-16 lg:px-28">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>123 Medical Street, Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaPhone className="text-blue-500 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>+880 123 456 789</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-blue-500 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>support@yourmedcare.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaClock className="text-blue-500 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Working Hours</h4>
            <p>Sat - Thu: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-blue-500 text-2xl mt-1"><FaFacebook /></div>
          <div>
            <h4 className="font-semibold">Facebook</h4>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              facebook.com/yourpage
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-blue-500 text-2xl mt-1"><FaWhatsapp /></div>
          <div>
            <h4 className="font-semibold">WhatsApp</h4>
            <a href="https://wa.me/880123456789" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
