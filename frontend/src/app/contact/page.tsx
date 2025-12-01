import ContactBanner from "@/components/Contact/ContactBanner";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import GoogleMapSection from "@/components/Contact/GoogleMapSection";

const Contact = () => {
    return (
        <div>
           <ContactBanner />
           <ContactForm />
           <ContactInfo />
           <GoogleMapSection />
        </div>
    );
};

export default Contact;