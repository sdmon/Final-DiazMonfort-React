import React, { useState } from 'react';

const ItemCount = ({ stock, initial, count, onCountChange }) => {
  const handleIncrement = () => {
    if (count < stock) {
      const updatedCount = count + 1;
      onCountChange(updatedCount);
    }
  };

  const handleDecrement = () => {
    if (count > initial) {
      const updatedCount = count - 1;
      onCountChange(updatedCount);
    }
  };

  return (
    <div>
      <button
        style={{ width: '30px', height: '30px', backgroundColor: 'black', color: 'white' }}
        onClick={handleDecrement}
        disabled={count <= initial}        
      >
        -
      </button>
      <span style={{ marginLeft: '5px', marginRight: '5px' }}>{count}</span>
      <button
        style={{ width: '30px', height: '30px', backgroundColor: 'black', color: 'white' }}
        onClick={handleIncrement}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;