import BottomNavbar from './BottomNavbar';
import MiddleNavbar from './MiddleNavbar';
import TopNavbar from './TopNavbar';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-[#082f2a]'>
          <TopNavbar />
          <MiddleNavbar />
          <BottomNavbar />
        </div>
    );
};

export default Navbar;