import React from "react";
import './howitworks.scss';
import star from '../../assets/blackstar.svg'



const Howitworks = () => {
    return (
        <div className="container howitworks">

            <div className="headinghowitworks">
                <h1 className="homepageheading2">How It Works</h1>
                <p className="homepagepara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis diam massa accumsan ac facilisis odio laoreet. </p>
            </div>
            <div className="box-section">
                <div className="box1">
                    <span>
                        - Step 01
                    </span>
                    <h2>
                        Connect Your Store
                    </h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi saepe laborum incidunt</p>
                </div>
                <img src={star} alt="" />
                <div className="box2">
                    <span>
                        - Step 02
                    </span>
                    <h2>
                        Send us Products
                    </h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi saepe laborum incidunt</p>

                </div>
                <img src={star} alt="" />
                <div className="box3">
                    <span>
                        - Step 03
                    </span>
                    <h2>
                        We ship the orders
                    </h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi saepe laborum incidunt</p>

                </div>

            </div>
        </div>
    )
}

export default Howitworks;