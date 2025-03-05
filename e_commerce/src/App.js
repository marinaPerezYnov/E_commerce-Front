import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDrawerAppBar from './Components/Header';
import Footer from "./Components/Footer";
import LoginPage from "./Pages/Auths/LoginPage";
import RegisterPage from "./Pages/Auths/RegisterPage";
import SettingPage from "./Pages/Setting/SettingPage";
import HomePage from "./Pages/Home/HomePage";
import { getPersonnalisationGraphiqueByOwnerId } from "./Requests_API/Personnalisation_Graphic";

import './App.css';
import './Styles/variable.css';

export const AuthContext = createContext();
export const PersonnalisationGraphiqueContext = createContext();

function App() {
  const [isConnect, setIsConnect] = useState(false);

  const [idPersonnalisationGraphique, setIdPersonnalisationGraphique] = useState('');
  const [firstPolice, setFirstPolice] = useState('');
  const [secondaryPolice, setSecondaryPolice] = useState('');
  const [firstColor, setFirstColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [thirdColor, setThirdColor] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsConnect(true);
      setIdPersonnalisationGraphique(sessionStorage.getItem('ownerId'));

      getPersonnalisationGraphiqueByOwnerId(sessionStorage.getItem('ownerId'))
      .then((response) => {
          /*
              Enregistrement de l'id de la personnalisation graphique pour la fournir dans les requêtes
               de mise à jour et de suppression de réservation graphique 
          */
          setIdPersonnalisationGraphique(response._id);
          setFirstPolice(response.firstPolice);
          setSecondaryPolice(response.secondaryPolice);
          setFirstColor(response.primaryColor);
          setSecondaryColor(response.secondaryColor);
          setThirdColor(response.thirdcolor);

          // Injecter les valeurs de personnalisation graphique dans les variables CSS dynamiques
          document.documentElement.style.setProperty('--first-police', response.firstPolice);
          document.documentElement.style.setProperty('--secondary-police', response.secondaryPolice);
          document.documentElement.style.setProperty('--first-color', response.primaryColor);
          document.documentElement.style.setProperty('--secondary-color', response.secondaryColor);
          document.documentElement.style.setProperty('--third-color', response.thirdcolor);

      })
      .catch((error) => {
          if(error.response?.status === 404) {
              console.log("Not found");
          }
      });
    }
  }, [firstColor, firstPolice, secondaryColor, secondaryPolice, thirdColor]);

  return (
    <AuthContext.Provider value={{ isConnect, setIsConnect }}>
      <PersonnalisationGraphiqueContext.Provider value={{
        idPersonnalisationGraphique,
        firstPolice,
        secondaryPolice,
        firstColor,
        secondaryColor,
        thirdColor,
        setIdPersonnalisationGraphique,
        setFirstPolice,
        setSecondaryPolice,
        setFirstColor,
        setSecondaryColor,
        setThirdColor
      }}>
        <Router>
          <div className="App">
            <HeaderDrawerAppBar />
            <div className="containerBloc" style={{
              margin: '10% 2%',
            }}>
              <Routes>
                <Route exact path="/accueil" element={<HomePage />}></Route>
                <Route exact path="/connection" element={<LoginPage />}></Route>
                <Route exact path="/inscription" element={<RegisterPage />}></Route>
                <Route exact path="/parametres" element={<SettingPage />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </PersonnalisationGraphiqueContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;