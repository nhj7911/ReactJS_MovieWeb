import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Group from "./routes/Group";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/page/:group/:page`} element={<Group />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path={`/search/:search`} element={<Search />} />
      </Routes>
    </Router>
  );
}
export default App;
