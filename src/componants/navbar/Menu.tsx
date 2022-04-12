import React from 'react'
import styled from "styled-components"
import { menuItems } from '../../utils/menuItems'
import CustomLink from "./CustomLink"
import { BsSearch } from 'react-icons/bs';
import SearchBar from './SearchBar'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setToggleSearchBar } from '../../features/movies/moviesSlice'
import { useLocation } from 'react-router-dom'

const MainContainer = styled.div`
  display: flex;
`
const ContainerMenu = styled.div`
    position: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100px;
    background-color: black;
    border: 1px solid grey;
    padding-top: 2rem;
    box-sizing: border-box;
    @media (max-width: 1000px) {
      flex-direction: row;
      bottom: 0;
      padding: 0;
      justify-content: space-around;
      align-items: center;
      height: 50px;
      width: 100vw;
      z-index: 100;
      
    };
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    cursor: pointer;
    width: 5vw;
    z-index: 20;
    justify-content: center;
    &:not(:last-child) {
      margin-bottom: 3rem !important;
    };
    @media (max-width: 1000px) {
      &:not(:last-child) {
        margin-bottom: 0 !important;
      }
    };
`
const Menu = () => {

  const pathName = useLocation().pathname
  const dispatch = useAppDispatch()
  const toggleSearchBar = useAppSelector(state => state.movies.toggleSearchBar)

  return (
    <MainContainer>
      <ContainerMenu>
        {menuItems.map(item => (

          <Icon key={item.id} >
            <CustomLink key={item.id} to={item.path}>

              <item.icon className='icon' size={30} />

            </CustomLink>
          </Icon>
        ))}
        <Icon
          className='search'
          onClick={() => {
            dispatch(setToggleSearchBar(pathName.includes("search") ? true : !toggleSearchBar))
          }}
        >
          <BsSearch size={30} style={{ color: "white" }} className='icon search' />
        </Icon>
      </ContainerMenu>
      <SearchBar />
    </MainContainer>
  )
}

export default Menu