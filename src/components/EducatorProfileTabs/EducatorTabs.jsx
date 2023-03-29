import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import EducatorAbout from "./EducatorAbout";
import EducatorBitesized from "./EducatorBitesized";
import "./Educator.scss";
import { baseUrl, educator_playlist, getProfileEducator } from "../../urls";

const EducatorTabs = () => {
  const [profile, setProfile] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    about: "",
  });

  const [playlists, setPlaylists] = useState([]);

  const getEducatorProfile = async () => {
    const res = await (
      await fetch(`${baseUrl}${getProfileEducator}`, {
        method: "GET",
        headers: {
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if (res.success == true && res.educator_profile != null) {
      setProfile({
        user_id: res.educator_profile.educator,
        about: res.educator_profile.about,
        first_name: res.educator_profile.first_name,
        last_name: res.educator_profile.last_name,
      });
      // setProfilePic({
      //   image: res.educator_profile.profile,
      //   video: res.educator_profile.video,
      // });
    }
  };

  const educatorPlaylist = async () => {
    const res = await (
      await fetch(`${baseUrl}${educator_playlist}/${profile.user_id}`, {
        method: "GET",
        headers: {
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if (res.success == true) {
      setPlaylists(res.playlists);
    }
  };
  useEffect(() => {
    getEducatorProfile();
    educatorPlaylist();
  }, []);

  return (
    <div className="container tabscontainer">
      <Tabs
        defaultActiveKey="About Me"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="About Me" title="About Me">
          <EducatorAbout
            about={profile.about}
            first_name={profile.first_name}
            last_name={profile.last_name}
          />
        </Tab>
        <Tab
          className=""
          eventKey="My Bitesized Courses"
          title="My Bitesized Courses"
        >
          <EducatorBitesized 
playlists={playlists}
          />
        </Tab>
        <Tab eventKey="Ratings and Reviews" title="Draft">
          <EducatorBitesized finishdraftsbtn />
        </Tab>
      </Tabs>
    </div>
  );
};

export default EducatorTabs;
