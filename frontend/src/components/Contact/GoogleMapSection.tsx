const GoogleMapSection = () => {
  return (
    <div className="mt-10 px-4 md:px-16 lg:px-28">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Our Location</h2>
      <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.930671833977!2d90.3912266759474!3d23.78900487866096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c20c57af03%3A0xd3f2c553b46f9c4a!2sDhaka!5e0!3m2!1sen!2sbd!4v1715612345678!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapSection;
