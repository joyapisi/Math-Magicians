import { React, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <h1>Math Magicians</h1>
      <div className="nav-box">
        <button type="button" onClick={toggleNav}>
          {navOpen ? (
            <MdClose style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          )}
        </button>
      </div>
    </nav>
  );
};
export default Nav;
