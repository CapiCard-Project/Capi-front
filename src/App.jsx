
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectRoute from "./Components/ProtectRoute"
import { Toaster } from "react-hot-toast"
// paginas
import {LandingPage} from "./Pages/LadinPage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Error404 from "./Pages/Error404"
import Tienda from "./Pages/Tienda"
//import Profile from "./Pages/Profile"

//provaider
//import { CapiPointsProvider } from "./provaider/CapiPointsProvaider"

// <CapiPointsProvider></CapiPointsProvider>
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />

}

function App() {


  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Error404 />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectRoute> <Home /> </ProtectRoute>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/tienda" element={<ProtectRoute> <Tienda /> </ProtectRoute>} />
            {
              //<Route path="/profile" element={<ProtectRoute> <Profile/> </ProtectRoute>}/>
            }
          </Routes>
        </BrowserRouter>

        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      
    </>
  )
}

export default App
