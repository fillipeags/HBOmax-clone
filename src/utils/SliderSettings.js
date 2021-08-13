/* eslint-disable react/prop-types */
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <>
    <IoIosArrowBack
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />

  </>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <>
    <IoIosArrowForward
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />
  </>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: true,
        adaptiveHeight: true,
      },
    },
  ],
};

export default settings;
