import { CDN_URL } from '../utils/constants';

const Banner = ({ banner }) => {
  return (
    <div className='keen-slider__slide cursor-pointer'>
      <img className='block w-[425] h-[250] rounded-2xl' src={CDN_URL + banner?.imageId} alt='' />
    </div>
  );
};

export default Banner;