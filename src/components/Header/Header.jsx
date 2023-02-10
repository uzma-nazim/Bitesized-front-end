import React from 'react'
import "../../style/globalStyle.scss"
import "./header.scss"
import profile from "../../assets/profile.png"
const Header = ({ userLogin }) => {
  return (
    <>
      {userLogin ?
        <>
          <div className='headerContainer container'>
            <div>
              <h1 className='logo'>Bitesized</h1>
            </div>
            <div className='header-link'>

              <ul>
                <li><a href="">Home</a></li>
                <li ><a className='activeLink' href="">My Courses</a></li>
                <li><img src={profile} alt="" /></li>
              </ul>


            </div>
          </div>
        </>
        :
        <>
          <div className="container headerContainer">
            <div>
              <h1 className='logo'>Bitesized</h1>
            </div>
            <div className='header-link'>

              <ul>
                <li><a href="">Sign Up as a Educator</a></li>
                <li><button className='bluebutton textadjust'>Sign Up</button></li>
                
              </ul>


            </div>
          </div>
        </>}

    </>
  )
}

export default Header