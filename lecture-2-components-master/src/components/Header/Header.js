import React from 'react';
import logo from '../../logo.svg';

import {
  Link
} from "react-router-dom";
import './Header.scss';

const CN = 'default-header';

export const Header = ({ className, greeting = "test", showLogo, children } ) => {
  return (
    <header className={`${CN} ${className}`}>
      { showLogo && (
        <img src={logo} className={`${CN}-logo`} alt="logo"/>
      )
      }

      {greeting}
      {children}

      <Link to="/" className={`${CN}__link`}>Home</Link>
      <Link to="/doggos" className={`${CN}__link`} >Doggos</Link>
    </header>
  );
};