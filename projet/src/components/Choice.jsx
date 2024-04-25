// Choice.jsx
import React from 'react';
import Button from './Button';

const Choice = ({ handleLevelChange }) => {
  return (
    <div id='choice' className="flex justify-center gap-[10px] mt-[10px]">
      {/* Boutons pour choisir le niveau */}
      <Button level="L1" onClick={() => handleLevelChange("L1")}>L1</Button>
      <Button level="L2" onClick={() => handleLevelChange("L2")}>L2</Button>
      <Button level="L3" onClick={() => handleLevelChange("L3")}>L3</Button>
    </div>
  );
}

export default Choice;
