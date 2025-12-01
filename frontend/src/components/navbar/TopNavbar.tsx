"use client";
import { motion } from "framer-motion";

const hotOffers = [
  "🩺 আল-শিফা ডায়াগনস্টিক সেন্টার: স্বাস্থ্যসেবায় আপনার বিশ্বস্ত পার্টনার।",
  "🔬 আমরা প্রদান করি আধুনিক টেস্ট সুবিধা ও দ্রুত রিপোর্ট ডেলিভারি।",
  "💉 হরমোন, ব্লাড, ইউরিনসহ ৫০+ টেস্ট এক জায়গায় করুন।",
  "🏥 অভিজ্ঞ টেকনিশিয়ান ও ডাক্তারের তত্ত্বাবধানে নির্ভরযোগ্য সেবা।",
  "📞 এখনই অ্যাপয়েন্টমেন্ট বুক করুন: ০১৭xxxxxxxx",
];

const TopNavbar = () => {
  return (
    <div className="relative w-full overflow-hidden py-2 border-b border-teal-700 bg-teal-950">
      <div className="absolute inset-0 blur-md h-full w-full -z-10 opacity-20 bg-gradient-to-r from-teal-500 via-lime-400 to-green-400"></div>

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {hotOffers.map((offer, index) => (
          <div
            className="flex items-center text-lg font-semibold mx-4"
            key={index}
          >
            <h3 className="bg-gradient-to-r from-green-300 via-lime-400 to-emerald-500 bg-clip-text text-transparent">
              {offer}
            </h3>
            {hotOffers.length - 1 !== index && (
              <span className="mx-5 text-white">|</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopNavbar;
