import React from 'react'
import styled from "styled-components"
import { grey } from '@mui/material/colors'
import { setChangeCount, setSearchValue, setToggleSearchBar } from '../../features/movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom'

interface MainContainerProps {
  show: boolean
}
const MainContainer = styled.div<MainContainerProps>`
transition: all .5s ease;
transform: ${props => props.show ? "translateY(0%)" : "translateY(-100%)"};
flex-direction: column;
position: fixed;
left: 0;
right: 0;
z-index: 1000;
box-sizing: border-box;
height: 10vh;
background-color: ${grey[900]};
width: calc(100% - 100px);
margin-left: auto;
@media (max-width: 1000px) {
    width: 100vw;
  };
`
const SearchBarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${grey[800]};
  color: white;
  height: 100%;
  padding-inline: 2rem;
`
interface CloseBox {
  hide: boolean
}
const CloseBox = styled.div<CloseBox>`
  display: ${props => props.hide ? "none" : "block"};
  cursor: pointer;
`
const SeacrhInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1.5em;
`

const SearchBar = () => {

  const dispatch = useAppDispatch()
  const toggleSearchBar = useAppSelector(state => state.movies.toggleSearchBar)
  const pathName = useLocation().pathname

  const count = useAppSelector(state => state.movies.changeCount)
  const searchValue = useAppSelector(state => state.movies.searchValue)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`/search/${e.target.value}`)
    dispatch(setSearchValue(e.target.value))
    dispatch(setChangeCount(count + 1))
  }

  const handleClick = () => {
    dispatch(setToggleSearchBar(false))
    dispatch(setChangeCount(0))
    dispatch(setSearchValue(""))
    navigate(-count)

  }

  return (
    <div >
      <MainContainer show={toggleSearchBar}>
        <SearchBarSection>
          <SeacrhInput
            className='searchBar'
            value={searchValue}
            onChange={(e) => handleChange(e)} placeholder='Search a movie, tv show or person...'
          />
          <CloseBox
            hide={pathName.includes("search") ? false : true}
            onClick={handleClick}
          >
            <AiOutlineClose size={35} />
          </CloseBox>
        </SearchBarSection>
      </MainContainer>
    </div>
  )
}

export default SearchBar