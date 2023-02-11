import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCourses from "./screens/UserCourses/UserCourses";
import ChooseCourseUser from "./screens/ChooseCourseUser/ChooseCourseUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user-courese" element={<UserCourses />} />
          <Route exact path="/choose-course-user" element={<ChooseCourseUser />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
