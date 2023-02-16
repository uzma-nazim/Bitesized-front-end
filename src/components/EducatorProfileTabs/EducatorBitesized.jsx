import React from 'react'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import CourseCard from '../Homepagecardsection/CourseCard'

const EducatorBitesized = ({finishdraftsbtn}) => {
  return (
    <div>
    <div className="container card-section">
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
        </div>
        <div className='container mainfinish'>
            {finishdraftsbtn ? <button className='finishdrafts'>Finish Drafts</button> : null}
        </div>
         <CustomerReviews/>
        </div>
  )
}

export default EducatorBitesized