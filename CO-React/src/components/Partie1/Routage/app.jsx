import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Routage/home";
import About from "./components/Routage/about";
import Page from "./components/Routage/PNF";
import Navbar from "./components/Routage/navbar";
// import UserProfile from "./components/Routage/userprofile"
import UserList from "./components/Routage/UserList";
import UserDetail from "./components/Routage/UserDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user/id" element={<UserProfile />} /> */}
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/*" element={<Page />} />
      </Routes>
    </Router>
  );
}


