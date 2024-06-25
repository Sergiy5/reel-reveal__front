import { useEffect, useState } from 'react';
// import { firstMovieOnPage, sliceMoviesPerPage } from 'utils';
import { WrapperGetShowMovies } from 'components/get-show-movies/GetShowMovies.styled';
import { MySlider } from 'components/my-slider/MySlider';

export const GetShowMovies = ({ title, getMovies, arrayMovies }) => {
  const [allMovies, setAllMovies] = useState([]);

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

  return (
    <WrapperGetShowMovies>
      <h2>{title}</h2>

      <MySlider arrMovies={allMovies} />
    </WrapperGetShowMovies>
  );
};
