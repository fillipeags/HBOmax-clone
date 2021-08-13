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
  infinite: true,
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
      breakpoint: 1081,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default settings;
