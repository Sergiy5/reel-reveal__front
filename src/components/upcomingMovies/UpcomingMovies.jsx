import { getUpcomingMovies } from 'apiService/apiService';
import { useEffect, useState } from 'react';
import { Container } from 'styles/Container.styled';
import { ButtonNext, ButtonPrew } from './UpcomingMovies.styled';
import { ListMovies } from 'components/listMovies/ListMovies';
import { Loader } from 'components/loader/Loader';

export const UpcomingMovies = () => {
  const [moviesAll, setMoviesAll] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState([]);
  const [page, setPage] = useState(1);

  //   console.log(moviesOnPage);

  const showMoviesPerPage = (arrMoies, page) => {
    const moviesPerPage = arrMoies.slice(page, page + 4);
    // console.log(moviesPerPage);
    setMoviesOnPage(moviesPerPage);
  };

  useEffect(() => {
    const setAllUpcomingMovies = async () => {
      const response = await getUpcomingMovies(page);
      setMoviesAll(response);
    };
    setAllUpcomingMovies();
  }, [page]);

  useEffect(() => {
    showMoviesPerPage(moviesAll, page);
  }, [moviesAll, page]);

  return (
    <Container>
      <ButtonPrew onClick={() => setPage(page - 1)} />
      <ListMovies movies={moviesOnPage} />
      <ButtonNext onClick={() => setPage(page + 1)} />
    </Container>
  );
};
