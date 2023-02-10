import React from 'react';
import './HomePageBlocksection.scss'
import star from '../../assets/Star 2.svg'




const HomePageBlocksection = () => {
    return (
        <div className="container block-section">
            
            <div className="box">
            <p className='box-text'>Up-to 1.5 lakh Student</p>
            <img className='star' src={star} alt="" />
            </div>
            <div className="box">
            <p className='box-text'>Millions of parents trust us</p>
            <img className='star' src={star} alt="" />
            </div>
            <div className="box">
            <p className='box-text'>+80% people refers</p>
            <img className='star' src={star} alt="" />
            </div>
            <div className="box">
            <p className='box-text'>+80% people refers</p>
            <img className='star' src={star} alt="" />
            </div>
        </div>
    )
}

export default HomePageBlocksection