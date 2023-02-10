import React from 'react'
import Courses from '../../components/Courses/Courses'
import Header from '../../components/Header/Header'
import MybiteSizedCourse from '../../components/MybiteSizedCourse/MybiteSizedCourse'
import "./Home.scss"
import HomePageCover from '../../components/HomePage Cover/HomePageCover'
import HomePageBlocksection from '../../components/HomepageBlocksection/HomepageBlocksection'
import Homepagetrendingcourse from '../../components/Homepagetrendingcourse/Homepagetrendingcourse'



const Home = () => {
  return (
    
    <>
    <Header/>
    <HomePageCover/>
    <HomePageBlocksection/>
    <Homepagetrendingcourse/>

    </>
  )
}

export default Home