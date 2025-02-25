import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDrawerAppBar from './Components/Header';
import Footer from "./Components/Footer";
import LoginPage from "./Pages/Auths/LoginPage";
import RegisterPage from "./Pages/Auths/RegisterPage";
import SettingPage from "./Pages/Setting/SettingPage";
// import HomePage from "./Pages/Home/HomePage";

import './App.css';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsConnect(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <HeaderDrawerAppBar isConnect={isConnect} />
        <div className="containerBloc" style={{
          margin: '10% 2%',
        }}>
          <Routes>
            <Route exact path="/" element={<LoginPage />}></Route>
            {/* <Route exact path="/accueil" element={<LoginPage />}></Route> */}
            <Route exact path="/connection" element={<LoginPage />}></Route>
            <Route exact path="/inscription" element={<RegisterPage />}></Route>
            <Route exact path="/parametres" element={<SettingPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;