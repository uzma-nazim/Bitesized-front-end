import React, { useContext, useState } from "react";
import "../components/Signupuserform/Signupuserform.scss";
import google from "../assets/google-icon.svg";
import hide from "../assets/hide.svg";
import { Link } from "react-router-dom";
import { ColorRing } from  'react-loader-spinner'
import { GlobalContext } from "../contextapi/GlobalContext";

const Login = () => {
  
    const { signInUser, isLoading } = useContext(GlobalContext)

    const [user, setUser] = useState({
      email: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [name]: value });
    }
    const handleCreateAccount = async (e) => {
      e.preventDefault();
      signInUser(user);
    };
    return (
      <div className="maincontainer">
        <div className="Signupuserform">
          <div className="main-content">
            <h1 className="fontbold signupuserheading">Bitesized</h1>
            <h3 className="fontmed signupuserheading3">
              Sign in 
            </h3>
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
              <form onSubmit={handleCreateAccount}>
                <p>Email</p>
                <div className="inputfield">
                  <input
                    value={user.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Ben"
                    name="email"
                  />
                </div>
                <p>Password</p>
                <div className="inputfield">
                  <input
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Ben"
                    name="password"
                  />
                  <img src={hide} alt="" />
                </div>
                <button className="" > {isLoading
                  ? <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />
                  : 'Login'} </button>
              </form>
  
              <div className="last">
                <p className="login-text" style={{ marginTop: "60px" }}>
                 Do't have an account?
                  <span>
                    <Link to={"/learner-signup"}> Signup</Link>
                  </span>
                </p>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
}

export default Login