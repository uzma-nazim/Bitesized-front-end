import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCourses from "./screens/UserCourses/UserCourses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user-courese" element={<UserCourses />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
