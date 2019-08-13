import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import Hero from './Hero';

import './style.sass';

export default function Exibir(props) {
  const heros = useSelector(state => state.heroLog);

  const visual = props.exibir ? 'container-geral display-block' : 'container-geral display-none';

  function trocar(){
    props.trocar(false);
    document.title = "Marvel Heros"
  }


  return (
    <div className={visual}>
      <div className="container-heroi" onClick={trocar}>
        <Hero heroi={heros}/>
      </div>
    </div>
  );
}
