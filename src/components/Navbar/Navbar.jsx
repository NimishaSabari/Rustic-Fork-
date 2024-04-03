import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu } from 'react-icons/md';
import {Link} from 'react-router-dom';


import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  
  const  [toggleMenu,setToggleMenu] = React.useState(false);
  return(
    <nav className = "app__navbar">
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt = "app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href=''/>What's on TRF</li>
        <li className='p__opensans'><a href='/AboutUs'>About TRF</a></li>
        <li className='p__opensans'><a href='#home'>Today's Menu</a></li>
        <li className='p__opensans'><a href='#home'>Awards</a></li>
        <li className='p__opensans'><a href='#home'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='login.jsx' className='p__opensans'>Log In/Register </a>
        <div/>
        <a href='/' className='p__opensans'> Book Table </a>
    </div>
    <div className='app__navbar-smallscreen'>
         <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
         {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() =>setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>What's on TRF</a></li>
              <li className='p__opensans'><a href='#home'>About TRF</a></li>
              <li className='p__opensans'><a href='#home'>Today's Menu</a></li>
              <li className='p__opensans'><a href='#home'>Awards</a></li>
              <li className='p__opensans'><a href='#home'>Contact</a></li>
            </ul>
          </div>
         )}
      </div>

  </nav>
         )
}


export default Navbar;
