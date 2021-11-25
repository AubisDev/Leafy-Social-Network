import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Login from "../components/auth/Login";
  import Register from "../components/auth/Register";
  
  const MainApp = () => {
      return(
          <BrowserRouter>
              <Routes>
                  <Route  path="/" element={<Login />} />\
                  <Route path='/register' element={<Register/>}/>
              </Routes>
          </BrowserRouter>
      )
  }
  
  export default MainApp;
  