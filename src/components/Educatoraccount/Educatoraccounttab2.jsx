import React from "react";
import './Educatoraccounttab2.scss'
import banner from '../../assets/Banner.svg';
import Camerabutton from '../../assets/Camera button.svg';
import profilecamera from '../../assets/profile-camera.svg';
import ProfileImage from '../../assets/Profile Image.svg';


const Educatoraccounttab2 = () => {
    return (
        <div className="payment-card-sec">

            <div className="banner">
                <img className="banner-cover" src={banner} alt="" />
                <label htmlFor="upload-photo"> <div className="button"><input type="file" name="" id="upload-photo" hidden /><img src={Camerabutton} alt="" />Edit Cover</div></label>
            </div>
            <div className="banner-details">
                <div className="profile-image">
                    <img className="image-one" src={ProfileImage} alt="" />
                    <img className="image-two" src={profilecamera} alt="" />
                </div>
                <div className="profile-details">
                    <h3 className="fontbold profile-name">Benjamin Mai</h3>
                    <p className="profile-para fontregular">Update your photo and personal Details</p>
                </div>
                <div className="edit-profile fontbold">
                    Edit Profile
                </div>
            </div>
            <div className="bio-data">
                <h1 className="fontbold heading-bio">Bio</h1>
                <p className="heading-para">I am a multidisciplinary designer with a curious mind, I enjoy to meet new people
                    and understand how they are solving problems, this is one of the reasons why I
                    invest my time on meetups from product management to everything related to design (research, </p>
            </div>
            <div className="bio-data">
                <h1 className="fontbold heading-bio">Email</h1>
                <p className="heading-para color-para">istiaqahmed@gmail.com </p>
            </div>
            <div className="password">
                <h1 className="fontbold password-heading">Change Password</h1>
                <div className="oldpassword">
                    <h4 className="fontbold password-para">Old Password</h4>
                    <input className="input-password" type="password" placeholder="Jubed Ahmed" />
                </div>
                <div className="newpassword-sec">
                    <div className="newpassword">
                        <h4 className="fontbold password-para">New Password</h4>
                        <input className="input-password-2" type="password" placeholder="Jubed Ahmed" />

                    </div>
                    <div className="newpassword">
                        <h4 className="fontbold password-para">Confirm New Password</h4>
                        <input className="input-password-2" type="password" placeholder="Jubed Ahmed" />

                    </div>

                </div>
                    <button className="password-button fontbold">Update Password</button>

            </div>
        </div>
    )
}

export default Educatoraccounttab2;