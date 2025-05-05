import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Footer from "./components/Footer/footer";
import Menu from './components/Menu/menu';
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import NewFooter from "./components/Footer1/newFooter";
import DynamicPages from "./pages/DynamicPages/dynamicPages";
import CaseStudy1 from "./pages/Cases/CaseStudy1";
import ContactUs from "./pages/Contact/contactUs";

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dynamic-pages" element={<DynamicPages />} />
        <Route path="/case-study-1" element={<CaseStudy1 />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
        
        
      </Routes>
      {/* <Footer /> */} 
      <NewFooter/>
    </Router>
  );
}

export default App;
