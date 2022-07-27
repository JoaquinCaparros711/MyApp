import { Routes, Route, Navigate,Link } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";


export const MainApp = () => {
  return (
    <>
        {/* <h1>MainApp</h1> */}
        <NavBar />

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="about" element={ <About /> } />
            <Route path="contact" element={ <Contact /> } />

            {/* <Route path="/*" element={ <HomePage /> } /> */}
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>

        <Footer />
    </>
  )
}
