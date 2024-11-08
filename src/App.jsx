
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
import LadingPageTest from "./Pages/LadingPageTest"
import Profile from "./Pages/Profile"
import FormPayment from "./Pages/FormPayment"

//provaider
import { CapiPointsProvider } from "./Provider/CapiPointsProvider"
import { UserProvider } from "./Provider/UserProvider"

// <CapiPointsProvider></CapiPointsProvider>
function Logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("capiPoints"); 
  return <Navigate to="/login" />

}

function App() {


  return (
    <>
      <UserProvider>
      <CapiPointsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Error404 />} />
            <Route path="/" element={<LadingPageTest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectRoute> <Home /> </ProtectRoute>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/tienda" element={<ProtectRoute> <Tienda /> </ProtectRoute>} />
            <Route path="/profile" element={<ProtectRoute> <Profile/> </ProtectRoute>}/>
            <Route path="/paymenth" element={<ProtectRoute> <FormPayment/> </ProtectRoute>}/>
          </Routes>
        </BrowserRouter>

        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </CapiPointsProvider>
      </UserProvider>

    </>
  )
}

export default App
