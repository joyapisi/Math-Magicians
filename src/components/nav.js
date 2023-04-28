import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  const close = () => {
    setNavOpen(false);
  };

  const paths = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/Calculator', text: 'Calculator' },
    { id: 3, path: '/DisplayQuotes', text: 'DisplayQuotes' },
  ];
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
        <ul className={`menuNav ${navOpen ? ' showMenu' : ''}`}>
          {paths.map((path) => (
            <li key={path.id}>
              <Link
                to={path.path}
                onClick={() => close()}
              >
                {path.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
