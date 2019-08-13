import React from 'react';

import './style.sass'

import Header from '../../components/Header';
import Body from '../../components/Body';
import Busca from '../../components/Busca';

export default function pages() {
  return (
    <div>
      <Header />
      <Busca />
      <Body />
    </div>
  );
}
