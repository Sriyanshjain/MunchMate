import Banner from "./Banner";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import ShimmerBanner from "./ShimmerBanner";
const Carousel = ({ offers,isLoading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true)
      },
      mode: "free",
      breakpoints: {
        "(max-width: 480px)": {
          slides: { perView: 1, spacing: 10 },
        },
        "(min-width: 480px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
    },
  );
  return (
    <div >
      <div className="flex justify-between items-center mb-4">
       <h2 className=' font-primary font-extrabold  text-xl sm:text-2xl  text-black-heading'>Best offers for you</h2>
      <div className="flex gap-2 items-center">
        {loaded  && instanceRef.current && (
          <>
            <button
              className="rounded-full bg-gray-100 p-2 mr-1"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
           <ArrowLongLeftIcon className='w-4 h-4' />{' '}
            </button>
            <button
              className="rounded-full bg-gray-100 p-2 ml-1"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
            <ArrowLongRightIcon className='w-4 h-4' />{' '}
            </button>
          </>
        )}
      </div>
      </div>
      {isLoading?(
        <div  className='flex gap-4 md:gap-8 mb-8'>
          {Array.from({length:3}).map((_,i)=><ShimmerBanner key={i}/>)}
        </div>
      ):  <div ref={sliderRef} className="keen-slider m-4">
      {offers.map((item) => {
        return <Banner key={item.id} banner={item} />;
      })}
    </div>

      }
    
    </div>
  );
};
export default Carousel;
