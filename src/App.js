import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCourses from "./screens/UserCourses/UserCourses";
import ChooseCourseUser from "./screens/ChooseCourseUser/ChooseCourseUser";
import UserProfile from "./screens/CourseUser/CourseUser";
import CourseUser from "./screens/CourseUser/CourseUser";
import Signup from "./screens/Signup/Signup";
import IntroToUIDesign from "./screens/IntroToUIDesign/IntroToUIDesign";
import LeanerSignup from "./screens/LeanerSignup/LeanerSignup";
import EducatorSignup from "./screens/EducatorSignup/EducatorSignup";
import CreateEducatorProfile from "./screens/CreateEducatorProfile/CreateEducatorProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/my-courese" element={<UserCourses />} />
          <Route exact path="/choose-course-user" element={<ChooseCourseUser />} />
          <Route exact path="/user-profile" element={<CourseUser />} />
          <Route exact path="/course-video" element={<IntroToUIDesign/>} />
          <Route exact path="/learner-signup" element={<LeanerSignup/>} />
          <Route exact path="/aducator-signup" element={<EducatorSignup/>} />
          <Route exact path="/create-profile" element={<CreateEducatorProfile/>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
