import React, { useEffect, useRef } from 'react';
import './App.css';
import Home from './pages/menuPages/Home';
import { ThemeProvider } from 'styled-components';
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { setChangeCount, setSearchValue, setToggleSearchBar } from "./features/movies/moviesSlice"
import { Routes, Route, useNavigate, useLocation, useParams, Navigate, useMatch, useResolvedPath } from 'react-router-dom';
import Movies from './pages/menuPages/Movies';
import Menu from './componants/navbar/Menu';
import Series from './pages/menuPages/Series';
import SingleMovie from './pages/moviePages/SingleMovie';
import SingleSerie from './pages/seriePages/SingleSerie';
import Director from './pages/Director';
import Genre from './pages/moviePages/Genre';
import PopulerMovie from './pages/moviePages/PopulerMovie';
import UpComingMovie from './pages/moviePages/UpComingMovie';
import TopRatedMovie from './pages/moviePages/TopratedMovie';
import NowPlayMovie from './pages/moviePages/NowPlayMovie';
import PopulerSerie from './pages/seriePages/PopulerSerie';
import CurrentlyAiringSerie from './pages/seriePages/CurrentlyAiringSerie';
import AiringTodaySerie from './pages/seriePages/AiringTodaySeri';
import TopRatedSerie from './pages/seriePages/TopRatedSerie';
import Search from './pages/Search';
import EmptySearch from './componants/EmptySearch';
import GenreSerie from './pages/seriePages/GenreSerie';

export interface Theme {
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
  },
  color: string
}

const theme: Theme = {
  breakpoints: {
    xs: 600,
    sm: 800,
    md: 1000
  },
  color: "red"
}

const localCount = localStorage.getItem("count") && JSON.parse(localStorage.getItem("count") || "")

function App() {

  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const pathName = useLocation().pathname

  const count = useAppSelector(state => state.movies.changeCount)
  const searchValue = useAppSelector(state => state.movies.searchValue)

  useEffect(() => {
    if (!searchValue && (pathName === "/search/" || pathName === "/search")) {
      navigate(-count)

      dispatch(setChangeCount(0))
    }
  }, [searchValue])

  useEffect(() => {
    if (pathName === `/search/${searchValue}` && count === 0) {
      dispatch(setChangeCount(localCount))
    }
  }, [searchValue])

  useEffect(() => {
    if (pathName.includes("search")) {
      dispatch(setToggleSearchBar(true))

    } else {
      dispatch(setToggleSearchBar(false))
      dispatch(setSearchValue(""))
    }
  }, [pathName, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    let event = e.target as HTMLElement

    if ((!event.classList.contains("search") && !event.classList.contains("searchBar")) && !pathName.includes("search")) {
      dispatch(setToggleSearchBar(false))
    }
  }

  return (

    <ThemeProvider theme={theme}>
      <div onClick={handleClick} style={{ overflow: "hidden", position: "relative", minHeight: "100vh", backgroundColor: "#121212" }}>
        <Menu />
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/serie/:id' element={<SingleSerie />} />
          <Route path='/person/:personID' element={<Director />} />
          <Route path='/genre/:genreID' element={<Genre />} />
          <Route path='/genre-serie/:genreID' element={<GenreSerie />} />
          <Route path="movies/category">
            <Route path='populer' element={<PopulerMovie />} />
            <Route path='upcoming' element={<UpComingMovie />} />
            <Route path='toprated' element={<TopRatedMovie />} />
            <Route path='nowplaying' element={<NowPlayMovie />} />
          </Route>
          <Route path="series/category">
            <Route path='populer' element={<PopulerSerie />} />
            <Route path='currently-airing' element={<CurrentlyAiringSerie />} />
            <Route path='today-airing' element={<AiringTodaySerie />} />
            <Route path='top-rated' element={<TopRatedSerie />} />
          </Route>
          <Route path='/search/:query' element={<Search />} />
          <Route path='/search/' element={<EmptySearch />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;


