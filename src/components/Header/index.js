import React from 'react';

import './style.sass'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className="header">
      <img src={logo} />
    </div>
  );
}
