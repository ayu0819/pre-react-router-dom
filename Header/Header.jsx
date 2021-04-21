import React from 'react';
import {Link} from 'react-router-dom';

      
const Header = () => {
    
 return(
  <>
    <Link to="/">Top</Link> // 2
    <Link to="/about">About</Link>
    <Link to="/portfolio">Portfolio</Link>
  </>
 )
}

export default Header;