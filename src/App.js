import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import MicroCourseApproval from "./screens/MicroApproval/MicroApproval";
import Educators from "./screens/Educators/Educators";
import Learners from "./screens/Learners/Learners";
import Payments from "./screens/Payments/Payments";
import Login from "./screens/Login";
import GlobalProvider, { GlobalContext } from "./contextapi/GlobalContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
function App() {

  const { token ,getUser} = useContext(GlobalContext) 

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {!localStorage.getItem('token')
              ? <>
                <Route exact path="/sign-up" element={<Signup />} />
                <Route exact path="/sign-in" element={<Login />} />
                <Route exact path="/learner-signup" element={<LeanerSignup />} />
                <Route exact path="/aducator-signup" element={<EducatorSignup />} />
              </>
              : <>
                <Route exact path="/my-course" element={<UserCourses />} />
                <Route exact path="/choose-course-user" element={<ChooseCourseUser />} />
                <Route exact path="/user-profile" element={<CourseUser />} />
                <Route exact path="/course-video" element={<IntroToUIDesign />} />
                <Route exact path="/create-profile" element={<CreateEducatorProfile />} />
                <Route exact path="/upload-course" element={<UploadMicroCourseEducator />} />
                <Route exact path="/upload-video-course" element={<SecondUploadMicroEducator />} />
                <Route exact path="/educator-profile" element={<EducatorProfileMicro />} />
                <Route exact path="/educator-account" element={<EducatorAccount />} />
                <Route exact path="/upload-microcourse" element={<UploadMicroCourse />} />
                <Route exact path="/dashboard" element={<DashboardUser />} />
                <Route exact path="/microcourse-approval" element={<MicroCourseApproval />} />
                <Route exact path="/educators" element={<Educators />} />
                <Route exact path="/Learners" element={<Learners />} />
                <Route exact path="/payments" element={<Payments />} />
              </>}
            <Route path="*" element={<Navigate to={localStorage.getItem('token') ? '/' : '/sign-up'} />} />
          </Routes>
          <ToastContainer />
        </GlobalProvider>

      </BrowserRouter>

    </>
  );
}

export default App;
