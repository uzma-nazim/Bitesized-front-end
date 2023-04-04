import React, { useContext, useEffect, useState } from "react";
import "./Signupuserform.scss";
import google from "../../assets/google-icon.svg";
import hide from "../../assets/hide.svg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contextapi/GlobalContext";
import { ColorRing } from "react-loader-spinner";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import zxcvbn from "zxcvbn"; // Import the zxcvbn library

const clientId =
  "905812548501-re7cubnpr3tpfiv0qkcno8u2i7s8okgc.apps.googleusercontent.com";

const Signupuserform = ({ leaner_name }) => {
  function calculatePasswordStrength(password) {
    const result = zxcvbn(password); // Call the zxcvbn function
    const score = result.score; // Get the score (0-4)
    const feedback = result.feedback.warning || result.feedback.suggestions[0]; // Get the feedback message
    return { score, feedback };
  }

  const { createUser, isLoading } = useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ score: 0, feedback: "" });
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setValid(validateEmail(emailValue));
  };
  const [user, setUser] = useState({
    name: "",
    confirm_password: "",
    role: leaner_name,
    phone_number: "",
    is_social: false,
  });

  function handlePasswordChange(e) {
    const password = e.target.value;
    const strength = calculatePasswordStrength(password);
    setPassword(password);
    setStrength(strength);
  }

  const barColor =
    strength.score < 2 ? "red" : strength.score < 3 ? "orange" : "green";

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const my_user={
      name:user.name,
      email:email,
      password:password,
      role: leaner_name,
      confirm_password:user.confirm_password,
    phone_number: user.phone_number,
    is_social: false,
    }
    createUser(my_user);
  };

  const onSuccess = (res) => { 
    const users = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      role: leaner_name,
      is_social: true,
    };
    
    createUser(users);
  
  };

  const onFailure = (res) => {
    console.log(res);
  };

  // const loginWithGoogle = async () => {
  //   <GoogleLogin
  //     clientId={clientId}
  //     onSuccess={onSuccess}
  //     onFailure={onFailure}
  //     cookiePolicy={'single_host_origin'}
  //     buttonText="Login with Google"
  //     isSignedIn={true}
  //   />
  // }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="maincontainer">
      <div className="Signupuserform">
        <div className="main-content">
          <h1 className="fontbold signupuserheading">Bitesized</h1>
          <h3 className="fontmed signupuserheading3">
            Create Account as a {leaner_name}
          </h3>
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            buttonText="Login with Google"
            isSignedIn={true}
          />
          {/* <div className="google" onClick={loginWithGoogle}>
            <img src={google} alt="" />
            <p className="googletext">Login with Google</p>
          </div> */}
          <div className="lineheading">
            <div className="line1"></div>
            <div className="linetext">Or Sign Up with email</div>
            <div className="line2"></div>
          </div>
          <div className="form">
            <form onSubmit={handleCreateAccount}>
              <p>Name</p>
              <div className="inputfield">
                <input
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Ben"
                />
              </div>
              <p>Phone Number</p>
              <div className="inputfield">
                <input
                  value={user.number}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Ben"
                  name="phone_number"
                />
              </div>
              <p>Email</p>
              <div className="inputfield">
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Ben"
                  name="email"
                />
              </div>
              <p>Password</p>
              <div className="inputfield">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Ben"
                  name="password"
                />
                <img src={hide} alt="" />
              </div>
              {/* <div className="passcheckfield" style={{ backgroundColor: barColor }}> */}
              {/* <div className="filed1 "></div>
                <div className="filed1"></div>
                <div className="filed1 light-white"></div>
                <div className="filed1 light-white"></div> */}
              <div
                className="strength-bar"
                style={{ backgroundColor: password ? barColor : "white" }}
              >
                <span>{strength.feedback}</span>
              </div>
              {/* </div> */}
              <span>
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </span>
              <p>Confirm Password</p>
              <div className="inputfield">
                <input
                  type="password"
                  value={user.confirm_password}
                  onChange={handleInputChange}
                  placeholder="Ben"
                  name="confirm_password"
                />
                <img src={hide} alt="" />
              </div>

              <p className="checkbox">
                <input type="checkbox" /> I accept
                <span>Terms and Conditions</span>
              </p>
              <button className="">
                {" "}
                {isLoading ? (
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                ) : (
                  "Create Account"
                )}{" "}
              </button>
            </form>

            <div className="last">
              <p className="login-text" style={{ marginTop: "60px" }}>
                Already have an account?
                <span>
                  <Link to={"/sign-in"}> Login</Link>
                </span>
              </p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Signupuserform;
