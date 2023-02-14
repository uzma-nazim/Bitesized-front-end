import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCourses from "./screens/UserCourses/UserCourses";
import ChooseCourseUser from "./screens/ChooseCourseUser/ChooseCourseUser";
import UserProfile from "./screens/CourseUser/CourseUser";
import CourseUser from "./screens/CourseUser/CourseUser";
import Signup from "./screens/Signup/Signup";
import IntroToUIDesign from "./screens/IntroToUIDesign/IntroToUIDesign";
import RateCoursesUser from "./screens/RateCoursesUser/RateCoursesUser";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/user-courese" element={<UserCourses />} />
          <Route exact path="/choose-course-user" element={<ChooseCourseUser />} />
          <Route exact path="/user-profile" element={<CourseUser />} />
          <Route exact path="/intro-to-ui-design" element={<IntroToUIDesign/>} />
          <Route exact path="/rate-courses-user" element={<RateCoursesUser/>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
