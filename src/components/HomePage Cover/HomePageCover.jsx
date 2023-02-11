import React from 'react';
import './HomePageCover.scss';
import cartoonImage from '../../assets/first cartoon.svg'
import cartoonImage2 from '../../assets/second cartoon.svg'
import searcicon from '../../assets/Search.svg'
import filtericon from '../../assets/Filter.svg'


const HomePageCover = () => {
    return (
        <div className="container homepage">
            <div className="heading" style={{width:"60%"}}>
                <h1 className='homepageheading'>
                    Project-based bitesized courses for kids
                </h1>
                
            </div>
            <div className="elements">
                
                <div>
                    <img src={cartoonImage} alt="" />
                </div>
                <div className='center-section'>
                    <p className='centerpara'>By the most innovative educators</p>
                    <div className='searcbar'>
                        <img src={searcicon} alt="" />
                        <input className='input' type="text" placeholder='Search Course...' />
                        <button className='filterbutton'>
                            <img src={filtericon} alt="" className='filtericon' />
                            Filter
                        </button>
                    </div>
                    <div className="tagline">
                        <button className='tag'>#Tag1</button>
                        <button className='tag'>#Tag2</button>
                        <button className='tag'>#Tag3</button>
                        <button className='tag'>#Tag4</button>
                        <button className='tag'>#Tag5</button>
                        <button className='tag'>#Tag6</button>
                    </div>
                    <div className="bullets">
                        <button className=' bulletsadjust'>Creative skills</button>
                        <button className=' bulletsadjust'>Wellness</button>
                        <button className=' bulletsadjust'>Enterpurnership</button>
                        <button className=' bulletsadjust'>Life skills</button>
                        <button className=' bulletsadjust'>Project based courses</button>
                        <button className=' bulletsadjust'>things you don't learn in school</button>
                    </div>
                </div>
                <div>
                    <img src={cartoonImage2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePageCover