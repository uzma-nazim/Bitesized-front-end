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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
function App() {
  const { token, users, getUser } = useContext(GlobalContext);
  console.log(token);
  useEffect(() => {
    // getUser()
  }, []);

  return (
    <>
        <BrowserRouter>
      <GlobalProvider>

          <Routes>
            <Route path="/" element={<Home />} />

            {!localStorage.getItem("token") ? (
              <>
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/learner-signup" element={<LeanerSignup />} />
                <Route path="/aducator-signup" element={<EducatorSignup />} />
              </>
            ) : (
              <>
                <Route path="/my-course" element={<UserCourses />} />
                <Route
                  path="/choose-course-user/:id"
                  element={<ChooseCourseUser />}
                />
                <Route path="/user-profile" element={<CourseUser />} />
                <Route path="/course-video" element={<IntroToUIDesign />} />
                <Route
                  path="/create-profile"
                  element={<CreateEducatorProfile />}
                />
                <Route
                  path="/upload-course"
                  element={<UploadMicroCourseEducator />}
                />
                <Route
                  path="/upload-video-course/:id"
                  element={<SecondUploadMicroEducator />}
                />
                <Route
                  path="/educator-profile"
                  element={<EducatorProfileMicro />}
                />
                <Route path="/educator-account" element={<EducatorAccount />} />
                <Route
                  path="/upload-microcourse"
                  element={<UploadMicroCourse />}
                />
                <Route path="/dashboard" element={<DashboardUser />} />
                <Route
                  path="/microcourse-approval"
                  element={<MicroCourseApproval />}
                />
                <Route path="/educators" element={<Educators />} />
                <Route path="/Learners" element={<Learners />} />
                <Route path="/payments" element={<Payments />} />
              </>
            )}
            {/*<Route
              path="*"
              element={
                <Navigate
                  to={localStorage.getItem("token") ? "/" : "/sign-in"}
                />
              }
            />*/}
          </Routes>
          <ToastContainer />
      </GlobalProvider>

        </BrowserRouter>
    </>
  );
}

export default App;
