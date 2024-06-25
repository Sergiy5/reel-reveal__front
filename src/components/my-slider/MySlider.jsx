import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { nanoid } from 'nanoid';
import useResize from 'utils/useResize';
import { ButtonNext, ButtonPrew, SvgArrowStyled, WrapperSlider } from './MySlider.styled';
import { MovieCard } from 'components/movie-card/MovieCard';
import sprite from '../../assets/images/svg-sprite/sprite.svg'


function SampleNextArrow(props) {
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
}) => {

  const viewWidth = useResize();
    
    const settings = {
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      arrows: viewWidth > 1024 ? true : null,
      pauseOnFocus: true,
      initialSlide: 0,
      lazyLoad: true,
      // autoplay: true,
      responsive: [
        {
          breakpoint: 855,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <WrapperSlider key={nanoid()}  >
      <Slider {...settings}>
        {arrMovies?.map(movie => {
          return (
              <MovieCard key={nanoid()} movie={movie} />
          );
        })}
      </Slider>
    </WrapperSlider>
  );
};
