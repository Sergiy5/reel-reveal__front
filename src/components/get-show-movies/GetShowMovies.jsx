import { useEffect, useState } from 'react';
// import { firstMovieOnPage, sliceMoviesPerPage } from 'utils';
import {
  WrapperGetShowMovies,
} from 'components/get-show-movies/GetShowMovies.styled';
import { MySlider } from 'components/my-slider/MySlider';

export const GetShowMovies = ({ title, getMovies, arrayMovies }) => {
  const [allMovies, setAllMovies] = useState([]);
  // const [moviesForOnePage, setMoviesForOnePage] = useState([]);
  // const [isDisablePrevBtn, setIsActivePrevBtn] = useState(true);
  // const [isDisableNextBtn, setIsDisableNextBtn] = useState(false);
  // const [page, setPage] = useState(1);

  // const [numberGetRequest, setNumberGetRequest] = useState(1);


  // const islastPageMovies = (allMovies, page) => {
  //   const quantityMovies = allMovies.length;
  //   const isLastPage = quantityMovies / page === 4 ? true : false;
  //   return isLastPage;
  // };

  // Get first request movies =============================================
  useEffect(() => {
    const getAllMovies = async (page = 1) => {
      try {
        const response = await getMovies(page);
        setAllMovies(response);
      } catch (error) {
        console.log('Get Show Movies', error);
      }
    };

    getAllMovies();

 
  }, [getMovies]);

  //Mange PREW NEXT buttons is active =====================================
  useEffect(() => {
    // const isLastPage = islastPageMovies(allMovies, page);

    // const firstMovieForPage = firstMovieOnPage(page);

    // Menage next, prew buttons to active ===========================
    // if (firstMovieForPage === 0) setIsActivePrevBtn(true);
    // if (firstMovieForPage > 0) setIsActivePrevBtn(false);

    // if (isLastPage) setIsDisableNextBtn(true);
    // if (!isLastPage) setIsDisableNextBtn(false);

    // Slice movies for one page =======================================
    // const moviesPerPage = sliceMoviesPerPage(allMovies, firstMovieForPage);

    // Set movies for one page ========================================
    // setMoviesForOnePage(moviesPerPage);
  }, [allMovies]);

  return (
    <WrapperGetShowMovies>
      <h2>{title}</h2>

      <MySlider
        arrMovies={allMovies}
      />

    </WrapperGetShowMovies>
  );
};
