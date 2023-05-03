import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h2>Math Magicians</h2>
    <div id="nav-box">
      <Link to="/">Home</Link>
      <span id="seperator">|</span>
      <Link to="Calculator">Calculator</Link>
      <span id="seperator">|</span>
      <Link to="/Quotes">Quotes</Link>
    </div>
  </nav>
);

export default Nav;
// import { React, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdClose } from 'react-icons/md';
// import { FiMenu } from 'react-icons/fi';

// const Nav = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen((prev) => !prev);
//   };
//   const close = () => {
//     setNavOpen(false);
//   };

//   const paths = [
//     { id: 1, path: '/', text: 'Home' },
//     { id: 2, path: '/Calculator', text: 'Calculator' },
//     { id: 3, path: '/Quotes', text: 'Quotes' },
//   ];
//   return (
//     <nav id="nav">
//       <h1>Math Magicians</h1>
//       <div id="nav-box">
//         <button type="button" onClick={toggleNav}>
//           {navOpen ? (
//             <MdClose style={{ color: '#0166ff', width: '30px', height: '30px' }} />
//           ) : (
//             <FiMenu style={{ color: '#0166ff', width: '30px', height: '30px' }} />
//           )}
//         </button>
//         <ul className={`nav-menu ${navOpen ? ' showMenu' : ''}`}>
//           {paths.map((path) => (
//             <li key={path.id}>
//               <Link
//                 to={path.path}
//                 onClick={() => close()}
//               >
//                 {path.text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Nav;
