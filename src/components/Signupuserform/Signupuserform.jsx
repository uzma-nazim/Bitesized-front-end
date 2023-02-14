import React from "react";
import './Signupuserform.scss'
import google from '../../assets/google-icon.svg'
import hide from '../../assets/hide.svg'

const Signupuserform = (props) => {
    return (
        <div className="maincontainer">

            <div className="Signupuserform">
                <div className="main-content">


                    <h1 className="fontbold signupuserheading">Bitesized</h1>
                    <h3 className="fontmed signupuserheading3">Create Account as a {props.name}</h3>
                    <div className="google">
                        <img src={google} alt="" />
                        <p className="googletext">Login with Google</p>
                    </div>
                    <div className="lineheading">
                        <div className="line1"></div>
                        <div className="linetext">Or Sign Up with email</div>
                        <div className="line2"></div>
                    </div>
                    <div className="form">
                        <form action="submit">
                            <p>Name</p>
                            <div className="inputfield">

                                <input type="text" placeholder="Ben" />
                            </div>
                            <p>Phone Number</p>
                            <div className="inputfield">

                                <input type="text" placeholder="Ben" />
                            </div>
                            <p>Email</p>
                            <div className="inputfield">

                                <input type="text" placeholder="Ben" />
                            </div>
                            <p>Password</p>
                            <div className="inputfield">

                                <input type="text" placeholder="Ben" />
                                <img src={hide} alt="" />
                            </div>
                            <div className="passcheckfield">
                                <div className="filed1 "></div>
                                <div className="filed1"></div>
                                <div className="filed1 light-white"></div>
                                <div className="filed1 light-white"></div>
                            </div>
                            <span>Use 8 or more characters with a mix of letters, numbers & symbols.</span>
                            <p>Confirm Password</p>
                            <div className="inputfield">

                                <input type="text" placeholder="Ben" />
                                <img src={hide} alt="" />
                            </div>

                            <p className="checkbox"> <input type="checkbox" /> I accept <span>Terms and Conditions</span></p>

                            <button className="">Create Account</button>
                        </form>

                        <div className="last">
                            <p className="login-text">Already have an account? <span>Login</span></p>
                        </div>
                    </div>
                    <div />
                </div>
            </div>
        </div >
    )
}

export default Signupuserform;