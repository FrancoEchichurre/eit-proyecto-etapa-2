import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import Upload from "../pages/Upload";
import Contact from "../pages/Contact"; 

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/contact-us" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes