import NavBar from "./NavBar"
import Home from "./Home"
import Edit_Cont from "./Edit_Cont"

import { ToastContainer } from "react-toastify"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add_Contact from "./Add_Cont"

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/addcon" element={<Add_Contact />} />
          <Route exact path="/edit/:id" element={<Edit_Cont />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
