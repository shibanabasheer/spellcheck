import React, { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function SpellCheck() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setText(inputValue);

    // Find the first misspelled word and suggest correction
    const words = inputValue.split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }

    // Reset correction if no misspelled words found
    setCorrection("");
  };

  return (
    <div className="container">
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        className="text-area"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text..."
      />
      {correction && <div className="correction">{correction}</div>}
    </div>
  );
}

export default SpellCheck;