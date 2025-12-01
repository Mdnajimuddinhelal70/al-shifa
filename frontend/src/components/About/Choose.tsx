
const Choose = () => {
    return (
        <div>
            <section className="py-16">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-[#18eb05] bg-clip-text text-transparent">Why Choose Us?</h2>

            <p className="bg-gradient-to-r from-yellow-400 via-orange-500 to-[#18eb05] bg-clip-text text-transparent">বিশেষ বৈশিষ্ট্য</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
            <div className="bg-teal-800 rounded-xl p-6 text-center hover:shadow-lg transform transition">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="font-semibold text-xl mb-2">অভিজ্ঞ চিকিৎসক</h3>
            <p>১০+ বছরের অভিজ্ঞ ডাক্তারদের দল</p>
            </div>
            <div className="bg-teal-800 shadow-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="font-semibold text-xl mb-2">সময়মতো সেবা</h3>
            <p>দ্রুত এবং নির্ভুল চিকিৎসা সেবা</p>
            </div>
            <div className="bg-teal-800 shadow-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-semibold text-xl mb-2">সহজ অ্যাপয়েন্টমেন্ট</h3>
            <p>অনলাইন বুকিং-এর সুবিধা</p>
            </div>
        </div>
        </section>
        </div>
    );
};

export default Choose;