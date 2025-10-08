
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Games: React.FC = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <h1>Games</h1>
      <p>Here are the games currently in development:</p>
      <ul>
        <li>
          <button onClick={toggleSubMenu}>Example Game</button>
          {isSubMenuOpen && (
            <ul>
              <li>
                <Link to="/games/example-game">About</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Games;
