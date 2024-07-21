import React, {useState} from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav_Img'>
        <img src="logoRT (1).png" alt="logo" className='logoImg' />
      </div>
    </div>
  );
};

export default Navbar;
