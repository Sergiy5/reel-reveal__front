import { useEffect, useState } from 'react';
import { Container } from 'styles';
import { firstMovieOnPage, sliceMoviesPerPage } from 'utils';
import {
  ButtonNext,
  ButtonPrew,
  SvgArrowStyled,
} from 'components/get-show-movies/GetShowMovies.styled';
import { ListMovies } from 'components/list-movies/ListMovies';
import Sprite from '../../assets/images/svg-sprite/sprite.svg';

export const GetShowMovies = ({ title, getMovies, arrayMovies }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [moviesForOnePage, setMoviesForOnePage] = useState([]);
  const [isDisablePrevBtn, setIsActivePrevBtn] = useState(true);
  const [isDisableNextBtn, setIsDisableNextBtn] = useState(false);
  const [page, setPage] = useState(1);
  // const [numberGetRequest, setNumberGetRequest] = useState(1);

  const islastPageMovies = (allMovies, page) => {
    const quantityMovies = allMovies.length;
    const isLastPage = quantityMovies / page === 4 ? true : false;
    return isLastPage;
  };

  useEffect(() => {
    // Get first request movies =============================================
    const getAllMovies = async (page = 1) => {
      try {
        const response = await getMovies(page);
        setAllMovies(response);
      } catch (error) {
        console.log('Get Show Movies', error);
      }
    };

    getAllMovies();

    // Get next requests movies =============================================
    // if (numberGetRequest > 1) {
    //   const getNextAllUpcomingMovies = async numberGet => {
    //     try {
    //       const response = await getMovies(numberGet);
    //       setAllMovies(prev => [...prev, ...response]);

    //       if (response.length === 20) {
    //         setIsActiveNextBtn(false);
    //       }
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   };
    //   getNextAllUpcomingMovies(numberGetRequest);
    // }
  }, [getMovies]);

  //Mange page for control active button =====================================
  useEffect(() => {
    const isLastPage = islastPageMovies(allMovies, page);

    //Set number get request
    // if (isLastPage) {
    //   setNumberGetRequest(get => get + 1);
    // }
    const firstMovieForPage = firstMovieOnPage(page);

    // Menage next, prew buttons to active ===========================
    if (firstMovieForPage === 0) setIsActivePrevBtn(true);
    if (firstMovieForPage > 0) setIsActivePrevBtn(false);

    if (isLastPage) setIsDisableNextBtn(true);
    if (!isLastPage) setIsDisableNextBtn(false);

    // Slice movies for one page =======================================
    const moviesPerPage = sliceMoviesPerPage(allMovies, firstMovieForPage);

    // Set movies for one page ========================================
    setMoviesForOnePage(moviesPerPage);
  }, [allMovies, page]);

  return (
    <Container>
      <h2>{title}</h2>

      <ButtonPrew
        type="button"
        disabled={isDisablePrevBtn}
        onClick={() => setPage(page - 1)}
      >
        <SvgArrowStyled
          $active={isDisablePrevBtn}
          style={{ rotate: '-180deg' }}
        >
          <use xlinkHref={`${Sprite}#icon-arrow`} />
        </SvgArrowStyled>
      </ButtonPrew>

      <ListMovies movies={moviesForOnePage} />

      <ButtonNext
        type="button"
        disabled={isDisableNextBtn}
        onClick={() => setPage(page + 1)}
      >
        <SvgArrowStyled $active={isDisablePrevBtn}>
          <use xlinkHref={`${Sprite}#icon-arrow`} />
        </SvgArrowStyled>
      </ButtonNext>
    </Container>
  );
};
