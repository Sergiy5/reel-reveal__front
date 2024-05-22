import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { nanoid } from 'nanoid';
import useResize from 'utils/useResize';
import { ButtonNext, ButtonPrew, SvgArrowStyled, WrapperSlider } from './MySlider.styled';
import { MovieCard } from 'components/movie-card/MovieCard';
import sprite from '../../assets/images/svg-sprite/sprite.svg'


function SampleNextArrow(props,) {
  const { currentSlide, onClick } = props;

  const isActive = currentSlide !== 16 ? false : true;
  return (
    <ButtonNext onClick={onClick} disabled={isActive}>
      <SvgArrowStyled $active={isActive}>
        <use xlinkHref={`${sprite}#icon-arrow`} />
      </SvgArrowStyled>
    </ButtonNext>
  );
}

function SamplePrevArrow(props) {
  const {  currentSlide, onClick } = props;
  
  const isActive = currentSlide !== 0 ? false : true
  return (
    <ButtonPrew onClick={onClick} disabled={isActive}>
      <SvgArrowStyled $active={isActive} $currentSlide={currentSlide}>
        <use xlinkHref={`${sprite}#icon-arrow`} />
      </SvgArrowStyled>
    </ButtonPrew>
  );
}

export const MySlider = ({
  arrMovies,
  handleClick,
  isDisablePrewBtn,
  isDisableNextBtn,
}) => {

    const viewWidth = useResize();

  const settings = {
    responsive: [
      {
        breakpoint: 601, // From min to  601px
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      // {
      //   breakpoint: 1025, // From min to  601px
      //   settings: {
          
      //     slidesToScroll: 3,
       
      //   },
      // },
    ],
    pauseOnHover: true,
    lazyLoad: true,
    slidesToScroll: 3,
    slidesToShow: 4,
    // autoplay: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnFocus: true,
    arrows: viewWidth > 1024 ? true : null,
    // centerPadding: '8px',
  };

  return (
    <WrapperSlider key={nanoid()}  onClick={handleClick}>
      <Slider {...settings}>
        {arrMovies.map(movie => {
          return <MovieCard key={nanoid()} movie={movie} />;
        })}
      </Slider>
    </WrapperSlider>
  );
};
