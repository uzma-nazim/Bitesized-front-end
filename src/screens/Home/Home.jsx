import React from 'react'
import Courses from '../../components/Courses/Courses'
import Header from '../../components/Header/Header'
import MybiteSizedCourse from '../../components/MybiteSizedCourse/MybiteSizedCourse'
import "./Home.scss"
import HomePageCover from '../../components/HomePage Cover/HomePageCover'
import HomePageBlocksection from '../../components/HomepageBlocksection/HomepageBlocksection'
import Homepagetrendingcourse from '../../components/Homepagetrendingcourse/Homepagetrendingcourse'
import Homepagecardsection from '../../components/Homepagecardsection/Homepagecardsection'
import Howitworks from '../../components/howitworks/howitworks'
import Meettheeducators from '../../components/Meettheeducators/Meettheeducators'
import Signupuser from '../../components/Signup-User/Signupuser'
import Signupuserform from '../../components/Signupuserform/Signupuserform'
import Createprofileeducator from '../../components/Createprofileeducator/Createprofileeducator'



const Home = () => {
  return (
    
    <>
    <Header />
    
    <HomePageCover/>
    <HomePageBlocksection/>
    <Homepagetrendingcourse/>
    <Homepagecardsection/>
    <Howitworks/>
  <Meettheeducators/>

  
    </>
  )
}

export default Home