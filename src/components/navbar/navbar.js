import './navbar.css';
import Logo from '../../assets/Entropy.webp';
import NavParticles from '../NavParticles';
import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';



const Navbar = ({ activePage, switchPage }) => {

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Events', path: 'events' },
    { name: 'Sponsors', path: 'sponsors' },
    { name: 'Team', path: 'team' },
    { name: 'Contact Us', path: 'contacts' }
  ];

  const active = {
    opacity: 1,
    fontWeight: 600
  };

  return (
    <nav className='navbar'>
      <div className="desktopNav">

        <div className="navBox">
          <div className="navLeft">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="entropyTitle">
              Entropy<span>2025</span>
            </div>
          </div>

          <div className="navRight">
            <div className="filler1"></div>
            <div className="navTabs">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`page-link`}
                  style={activePage === item.path ? active : {}}
                  onClick={(e) => {
                    e.preventDefault();
                    switchPage(item.path);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="filler"></div>

            <div className="sideButton">Register</div>
          </div>
        </div>
      </div>

      <div className="burger">
        <Icon icon="duo-icons:app-dots" className='burgerIcon'/>
      </div>

      {/* <div className="phoneNav"> */}
      {/* </div> */}
    </nav>
  );
};

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePage, setActivePage] = useState('Home');

//   const navItems = [
//     { name: 'Home', path: '#home' },
//     { name: 'Events', path: '#about' },
//     { name: 'Team', path: '#services' },
//     { name: 'Sponsors', path: '#contact' },
//     { name: 'contacts', path: '#contact' }
//   ];

//   const handleNavClick = (name) => {
//     setActivePage(name);
//     setIsOpen(false);
//   };

//   return (
//     <nav className="">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.path}
//                 className={`${activePage === item.name ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
//                 onClick={() => handleNavClick(item.name)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.path}
//                 className={`${activePage === item.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
//                 onClick={() => handleNavClick(item.name)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

export default Navbar;