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
import UploadMicroCourseEducator from "./screens/UploadMicroCourseEducator/UploadMicroCourseEducator";
import SecondUploadMicroEducator from "./screens/SecondUploadMicroEducator/SecondUploadMicroEducator";
import EducatorProfileMicro from "./screens/EducatorProfileMicro/EducatorProfileMicro";
import EducatorAccount from "./screens/EducatorAccount/EducatorAccount";
import UploadMicroCourse from "./components/UploadMicroCourse/UploadMicroCourse";
import DashboardUser from "./screens/DashboardUser/DashboardUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/my-course" element={<UserCourses />} />
          <Route exact path="/choose-course-user" element={<ChooseCourseUser />} />
          <Route exact path="/user-profile" element={<CourseUser />} />
          <Route exact path="/course-video" element={<IntroToUIDesign/>} />
          <Route exact path="/learner-signup" element={<LeanerSignup/>} />
          <Route exact path="/aducator-signup" element={<EducatorSignup/>} />
          <Route exact path="/create-profile" element={<CreateEducatorProfile/>} />
          <Route exact path="/upload-course" element={<UploadMicroCourseEducator/>} />
          <Route exact path="/upload-video-course" element={<SecondUploadMicroEducator/>} />
          <Route exact path="/educator-profile" element={<EducatorProfileMicro/>} />
          <Route exact path="/educator-account" element={<EducatorAccount/>} />
          <Route exact path="/upload-microcourse" element={<UploadMicroCourse/>} />
          <Route exact path="/dashboard-user" element={<DashboardUser/>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
