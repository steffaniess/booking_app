import {Route, Routes} from "react-router-dom";
import Home from "../views/home/Home";
import Booking from "../views/booking/Booking";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";

const Routing = () => {
    return(
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/booking' element={<Booking/>}/>
            <Route path = '/about' element={<About/>}/>
            <Route path = '/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default Routing;