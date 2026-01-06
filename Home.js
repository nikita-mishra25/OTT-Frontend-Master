import React from 'react'
import HeroSlider from '../components/HeroSlider'
import MovieList from '../components/MovieList'
import Continue from '../components/Continue'
import Poster from '../components/Poster'

const Home = () => {
  
  return (
    <>
      <HeroSlider/>
      <Continue title="Continue Watching"/>
      <Poster title="Upcomming Movies"/>
      <MovieList title="Latest Releases"/>
      <MovieList title="Action Movie"/>
      <MovieList title="Top Rated on IMDb"/>
      <MovieList title="Peacock's Finest"/>
    </>
  )
}

export default Home

