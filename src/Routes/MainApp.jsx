import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Login from "../components/auth/Login";
import HomePage from "../components/mainpage/HomePage";
  
  const MainApp = () => {
      return(
          <BrowserRouter>
              <Routes>
                  <Route  path="/" element={<Login />} />\
                  <Route path='/home' element={<HomePage/>}/>
              </Routes>
          </BrowserRouter>
      )
  }
  
  export default MainApp;
  