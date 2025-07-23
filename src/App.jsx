import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Loging";
import SignUp from "./components/Signup";
import NotFound from "./components/NotFound";
import Contatus from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Contatus" element={<Contatus />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
