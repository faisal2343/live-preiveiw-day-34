import React, { useState } from 'react';

function LivePreview() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Live Preview Form</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          width: '250px',
          border: '1px solid gray'
        }}
      />
      <h3 style={{ marginTop: '20px' }}>Preview:</h3>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{text}</p>
    </div>
  );
}

export default LivePreview;
