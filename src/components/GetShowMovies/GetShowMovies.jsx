import { useEffect, useState } from 'react';
import { Container } from 'styles/Container.styled';
import { firstMovieOnPage, sliceMoviesPerPage } from 'utils';
import {
  ButtonNext,
  ButtonPrew,
  SvgArrow,
} from 'components/GetShowMovies/GetShowMovies.styled';
import { ListMovies } from 'components/listMovies/ListMovies';

export const GetShowMovies = ({ title, getMovies }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [numberGetRequest, setNumberGetRequest] = useState(1);
  const [moviesForOnePage, setMoviesForOnePage] = useState([]);
  const [isActivePrevBtn, setIsActivePrevBtn] = useState(true);
  const [isActiveNextBtn, setIsActiveNextBtn] = useState(false);
  const [page, setPage] = useState(1);

  const islastPageMovies = (allMovies, page) => {
    const quantityMovies = allMovies.length;
    const isLastPage = quantityMovies / page === 4 ? true : false;
    return isLastPage;
  };

  //=====================================================================
  useEffect(() => {
    // Get first request movies =============================================
    const getAllUpcomingMovies = async quntityGet => {
      try {
        const response = await getMovies(quntityGet);
        setAllMovies(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (numberGetRequest === 1) getAllUpcomingMovies(numberGetRequest);

    // Get next requests movies =============================================
    if (numberGetRequest > 1) {
      const getNextAllUpcomingMovies = async quntityGet => {
        try {
          const response = await getMovies(quntityGet);
          setAllMovies(prev => [...prev, ...response]);
          if (response.length === 20) {
            setIsActiveNextBtn(false);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      getNextAllUpcomingMovies(numberGetRequest);
    }
  }, [getMovies, numberGetRequest]);

  //====================================================================================================
  useEffect(() => {
    const isLastPage = islastPageMovies(allMovies, page);

    if (isLastPage) {
      setNumberGetRequest(get => get + 1);
    }
    const firstMovieForPage = firstMovieOnPage(page);

    // Menage next, prew buttons to active ===========================
    if (firstMovieForPage === 0) setIsActivePrevBtn(true);
    if (firstMovieForPage > 0) setIsActivePrevBtn(false);

    //Slice movies for one page =======================================
    const moviesPerPage = sliceMoviesPerPage(allMovies, firstMovieForPage);

    // Set movies for one page ========================================
    setMoviesForOnePage(moviesPerPage);
  }, [allMovies, page]);

  //======================================================================

  return (
    <Container style={{ position: 'relative' }}>
      <h2>{title}</h2>
      <ButtonPrew
        type="button"
        disabled={isActivePrevBtn}
        onClick={() => setPage(page - 1)}
      >
        <SvgArrow $active={isActivePrevBtn} style={{ rotate: '-180deg' }} />{' '}
      </ButtonPrew>
      <ListMovies movies={moviesForOnePage} />
      <ButtonNext
        type="button"
        disabled={isActiveNextBtn}
        onClick={() => setPage(page + 1)}
      >
        <SvgArrow $active={isActiveNextBtn} />
      </ButtonNext>
    </Container>
  );
};
