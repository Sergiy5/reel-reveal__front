import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ListMovies } from 'components/list-movies/ListMovies';
import { SharedStyledLinkBtn } from 'styles';
import { QuizListMoviesTitle, WrapperQuizListMovies, WrapperQuizSlider } from './QuizListMovies.styled';
import useResize from 'utils/useResize';
import { LoadMoreBtn, MovieCard, MovieImg, } from 'components/list-movies/ListMovies.styled';
import { nanoid } from 'nanoid';
import notFoundImg from '../../../assets/images/No-Image.jpg';


export const QuizListMovies = ({ arrMovies, isQuizActive, onLoadMoreCard }) => {
  const viewWidth = useResize();

  const handleClick = e => {
    if (e.target.id === 'load_more') {
      const filteredMovies = arrMovies.filter(movie => movie.title);
      const arrExistedTitles = filteredMovies.map(movie => movie.title);
      onLoadMoreCard(arrExistedTitles);
    }
  };
  // centerMode: true,
  // centerPadding: '60px',
  // infinite: true,
  // slidesToShow: 8,
  // slidesToScroll: 1,
  // // autoplay: true,
  // speed: 50,
  // autoplaySpeed: 4000,
  // cssEase: 'linear',
  // arrows: null,
  // pauseOnFocus: true,
  // pauseOnHover: false,

  const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <WrapperQuizListMovies onClick={handleClick}>
      <QuizListMoviesTitle>Have you seen these?</QuizListMoviesTitle>
      {viewWidth > 1024 ? (
        <ListMovies movies={arrMovies} onLoadMore={onLoadMoreCard} />
      ) : (
        <WrapperQuizSlider key={nanoid()}>
          <Slider {...settings}>
            {arrMovies.map(movie => {
              const { poster_path, id, title, textBtn } = movie;
              const poster = poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `${notFoundImg}`;

              return (
                <div key={nanoid()}>
                  <MovieCard key={nanoid()}>
                    {id === 'load_more' ? (
                      <LoadMoreBtn id={id}>{textBtn}</LoadMoreBtn>
                    ) : (
                      <MovieImg
                        key={nanoid()}
                        id={id}
                        src={poster}
                        alt={title}
                      />
                    )}
                  </MovieCard>
                </div>
              );
            })}
          </Slider>
        </WrapperQuizSlider>
      )}
      <SharedStyledLinkBtn onClick={isQuizActive} $width={'285px'}>
        retake quiz
      </SharedStyledLinkBtn>
    </WrapperQuizListMovies>
  );
};
