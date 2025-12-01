import Banner from '@/components/Banner/Banner';
import FeaturedDoctors from '@/components/Featured/FeaturedDoctors';
import Service from '@/components/Services/Service';

const Home = () => {
  return (
    <div>
     <Banner />
     <Service />
     <FeaturedDoctors />
    </div>
  );
};

export default Home;