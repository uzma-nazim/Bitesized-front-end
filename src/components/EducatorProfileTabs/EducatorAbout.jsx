import React from 'react'

const EducatorAbout = ({about,first_name,last_name}) => {
  return (
    <div className="aboutMeContainer">
      <p className="p5">Instructor</p>
      <h3 className="heading3">{first_name} {last_name}</h3>

      <div className="aboutintro aboutmargin">
        <p className="homepagepara grey2 homepagemaxwidth">
         {about}
        </p>
      </div>
      {/* <div className="aboutintro aboutmargin">
        <p className="homepagepara grey2 homepagemaxwidth">
          Over +7 years, I’ve worked on a diverse set of projects, working from
          research to production, that include iOS, Android, web, SaaS, B2B,
          B2C, user research, data visualization, art direction and marketing
          design.
        </p>
      </div>
      <div className="aboutintro aboutmargin">
        <p className="homepagepara grey2 homepagemaxwidth">
          In all projects, I seek to simplify the relationship between people
          and the interactive products they use, taking into consideration
          business goals and technological constraints. <br />
          I am self-aware of the impact our solutions have on people's lives,
          and this is the reason why I always give my best to create a seamless
          and delightful experience.
        </p>
      </div> */}
    </div>
  )
}

export default EducatorAbout;