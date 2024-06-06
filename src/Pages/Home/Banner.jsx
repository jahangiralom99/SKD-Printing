import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <div>
              <Carousel autoPlay={true} showThumbs={false}	>
                <div className='relative' >
                    <img className='h-screen object-cover' src="https://i.ibb.co/kyqR5LK/archive-boxes-2e16d0ba-fill-2600x600.jpg" />
                  <h1 className='text-4xl font-bold bg-[#00000099] text-white p-12 absolute top-52 md:left-52'>Packing for fresh Products</h1>
                </div>
                <div className='relative'>
                    <img className='h-screen object-cover' src="https://i.ibb.co/3NXc6dX/fruits-and-veggies-stall-2e16d0ba-fill-2600x600.jpg" />
                    <h1 className='text-4xl font-bold bg-[#00000099] text-white p-12 absolute top-52 md:left-52'>Packing for fresh Products</h1>
                   
                </div>
                <div className='relative'>
                    <img className='h-screen object-cover' src="https://i.ibb.co/kyqR5LK/archive-boxes-2e16d0ba-fill-2600x600.jpg" />
                    <h1 className='text-4xl font-bold bg-[#00000099] text-white p-12 absolute top-52 md:left-52'>Packing for fresh Products</h1>
                   
                </div>
            </Carousel>       
        </div>
    );
};

export default Banner;