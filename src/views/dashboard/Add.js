import React, { useState } from 'react';

const Add = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedValues, setSavedValues] = useState([]);
  const [showInput, setShowInput] = useState(true);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      setSavedValues(inputValue);
      setShowInput(false);
    }
  };

  return (
    <div className='col-md-12'>
      {showInput ? (
        <input
          type='text'
          className='form-control'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h2>{savedValues}</h2>
      )}
    </div>
  );
};

export default Add;
