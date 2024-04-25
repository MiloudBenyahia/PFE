import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Promotion from "./components/Promotion";
import Teacher from "./components/Teacher";
import Course from "./components/Course";
import Amphi from "./components/Amphi";
import Salle_TD from "./components/Salle_TD";
import Salle_TP from "./components/Salle_TP";
import Seance from "./components/Seance";
import Footer from "./components/Footer";
import Choice from "./components/Choice";

import jsonData1 from "./les donneés/edt_1.json";
import jsonData2 from "./les donneés/edt_2.json";
import jsonData3 from "./les donneés/edt_3.json";

/*import styles from "./style";*/

const App = () => {
  const [section, setSection] = useState("Home"); // Définir la section active par défaut sur Home
  const [level, setLevel] = useState("L1");
  const [jsonData, setJsonData] = useState(jsonData1);
  const [showChoice, setShowChoice] = useState(false);
  const [showFooter, setShowFooter] = useState(true); // Montrer le footer par défaut

  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
    switch (selectedLevel) {
      case "L1":
        setJsonData(jsonData1);
        break;
      case "L2":
        setJsonData(jsonData2);
        break;
      case "L3":  
        setJsonData(jsonData3);
        break;
      default:
        break;
    }
  };

  const handleNavItemClick = (selectedSection) => {
    setSection(selectedSection);
    // Afficher Choice uniquement pour les sections spécifiques
    setShowChoice(selectedSection === "Promotion" || selectedSection === "Teacher" || selectedSection === "Course" || selectedSection === "Amphi" || selectedSection === "Salle_TD" || selectedSection === "Salle_TP" || selectedSection === "Seance");
    // Afficher le footer uniquement avec la section Hero
    setShowFooter(selectedSection === "Home");
  };

  return (
    <div className='w-full overflow-hidden  bg-gray-400 pr-0'>
      <Navbar onNavItemClick={handleNavItemClick} /> {/* Afficher la Navbar */}
      {/* Afficher la section en fonction de la valeur de section */}
      {section === "Home" && <Home />}
      {showChoice && <Choice handleLevelChange={handleLevelChange} />} {/* Afficher Choice uniquement si showChoice est true */}
      {section === "Promotion" && <Promotion data={jsonData} />}
      {section === "Teacher" && <Teacher data={jsonData} />}
      {section === "Course" && <Course data={jsonData} />}
      {section === "Amphi" && <Amphi data={jsonData} />}
      {section === "Salle_TD" && <Salle_TD data={jsonData} />}
      {section === "Salle_TP" && <Salle_TP data={jsonData} />}
      {section === "Seance" && <Seance data={jsonData} />}
      {showFooter && <Footer />} {/* Afficher le footer uniquement si showFooter est true */}
    </div>
  );
}

export default App;
