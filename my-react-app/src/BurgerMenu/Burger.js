import React, { useState } from 'react';
import './burgerStyles.css'; 
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="open-menu" onClick={toggleMenu}>☰</button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;