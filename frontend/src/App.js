import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PDF from "./Pages/PDF";
import Image from "./Pages/Image";
import Error from "./Pages/Error";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Vault from "./Pages/Vault";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Image />} />
        <Route exact path="/pdf" element={<PDF />} />
        <Route exact path="/sign_in" element={<SignIn />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/vault" element={<Vault />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
