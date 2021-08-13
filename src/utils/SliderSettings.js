import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: <IoIosArrowBack color="white" />,
  nextArrow: <IoIosArrowForward color="white" />,
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
