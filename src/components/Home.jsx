import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const Home = () => {
  return (
    <div className='home'>
      <Navbar page="StudentDetails"></Navbar>
    <Main></Main>
    </div>
  )
}

export default Home
