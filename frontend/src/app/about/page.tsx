import AboutBanner from "@/components/About/AboutBanner";
import AboutOverview from "@/components/About/AboutOverview";
import Choose from "@/components/About/Choose";
import Founders from "@/components/About/Founders";

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutOverview />
            <Choose />
            <Founders />
        </div>
    );
};

export default About;