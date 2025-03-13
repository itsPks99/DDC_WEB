import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Footer from "./components/Footer/footer";
import Menu from './components/Menu/menu';
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import NewFooter from "./components/Footer1/newFooter";
import ConnectWithUs from "./pages/Contact/connectWithUs/connectwithUs";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact/contact";
// import Expertise from "./pages/Expertise";
// import OurWork from "./pages/OurWork";
function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/expertise" element={<Expertise />} />
        <Route path="/our-work" element={<OurWork />} /> */}
      </Routes>
      {/* <Footer /> */}
      <ConnectWithUs/>  
      <NewFooter/>
    </Router>
  );
}

export default App;
