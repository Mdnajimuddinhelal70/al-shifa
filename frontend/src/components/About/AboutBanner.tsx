"use client";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../dist/bannerImg/img1.jpg';
import img3 from '../../../dist/bannerImg/img3.jpg';
import img4 from '../../../dist/bannerImg/img4.jpg';
import img5 from '../../../dist/bannerImg/img5.jpg';

const AboutBanner = () => {
    return (
       <div className=''>
         <Carousel showArrows={true} autoPlay infiniteLoop>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                <Image src={img1} alt='bannerImage' fill style={{ objectFit: 'cover' }} />
               
            </div>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                <Image src={img3} alt='bannerImage' fill style={{ objectFit: 'cover' }} />
                
            </div>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                <Image src={img4} alt='bannerImage' fill style={{ objectFit: 'cover' }} />
               
            </div>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                <Image src={img5} alt='bannerImage' fill style={{ objectFit: 'cover' }} />
               
            </div>
        </Carousel>
       </div>
    );
};

export default AboutBanner;
