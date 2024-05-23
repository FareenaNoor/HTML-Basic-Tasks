import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [acheDost, setAcheDost] = useState([]);
  const [bureDost, setBureDost] = useState([]);
  const [kamwaleDost, setKamwaleDost] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim() !== '') {
      if (selectedOption === 'ache dost') {
        setAcheDost([...acheDost, inputText]);
      } else if (selectedOption === 'bure dost') {
        setBureDost([...bureDost, inputText]);
      } else if (selectedOption === 'kamwale dost') {
        setKamwaleDost([...kamwaleDost, inputText]);
      }
      setInputText('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <label>
          Input Text:
          <input type="text" value={inputText} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
        </label>
        <button onClick={handleAddText} style={{ marginLeft: '10px' }}>Add</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Select Option:
          <select value={selectedOption} onChange={handleSelectChange} style={{ marginLeft: '10px' }}>
            <option value="">Select an option</option>
            <option value="ache dost">Ache Dost</option>
            <option value="bure dost">Bure Dost</option>
            <option value="kamwale dost">Kamwale Dost</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Ache Dost</h3>
        <ul>
          {acheDost.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Bure Dost</h3>
        <ul>
          {bureDost.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Kamwale Dost</h3>
        <ul>
          {kamwaleDost.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
