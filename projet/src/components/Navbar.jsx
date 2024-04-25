import React, { useState } from "react";
import { close, logo3, menu } from '../assests/index';
import { navLinks } from '../constants/index';

const Navbar = ({ onNavItemClick }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const handleItemClick = (sectionId) => {
    onNavItemClick(sectionId);
    setToggle(false); // Fermer le menu lorsqu'un élément est cliqué
  };

  return (
    <nav className="w-full py-6 flex-col flex justify-between items-center navbar bg-black right-0">
      <img src={logo3} href='home' alt='timetable' className='w-[150px] h-[73px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`} onClick={() => handleItemClick(nav.id)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={handleToggle}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute
            top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`} onClick={() => handleItemClick(nav.id)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
