import React from 'react'
import statussectionvideo from "../../assets/statussectionvideo.svg";
import whiteplaybtn from "../../assets/whiteplaybtn.svg";

const DashboardStatus = () => {
  return (
    <div className='statusdiv'>
        <h1>Status</h1>
      <div className='greyline greystatus'></div>

      <div className='videocontentforflex'>
      <div className="video-Box statussec">
        <video className="thumbnail" poster={statussectionvideo} width="100%" height="208">
          <source type="video/mp4" src={""} />
        </video>
        <div className="whitebtnforposition">
          <img className='whiteplaybtn' src ={whiteplaybtn} alt="" />        
        </div>
      </div>
      <div className="fundamentalheading">
        <h1>Fundamental of User Interface Design</h1>
        <p>Edits uploaded and lives</p>
      </div>
      <div>
        <p className="pending">Pending</p>
      </div>
      </div>
      <div className='greyline greystatussecond'></div>

      <div className="liveandtrendbtn">
        <button>Live and Trending</button>
        <button>Add to live and trending</button>
        <button>Take off of live and trending</button>
      </div>
    </div>
   
  )
}

export default DashboardStatus;